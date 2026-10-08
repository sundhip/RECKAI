import {
  AnalyticsEvent,
  AnalyticsEventName,
  ALLOWED_ANALYTICS_EVENTS,
  FORBIDDEN_PROPERTY_KEYS,
  SafeEventProperties,
} from "@/types/analytics";
import { WebVitalsMetric } from "@/types/telemetry";

/**
 * Validates whether an event name is recognized and allowed.
 */
export function isValidAnalyticsEvent(name: string): name is AnalyticsEventName {
  return (ALLOWED_ANALYTICS_EVENTS as readonly string[]).includes(name);
}

/**
 * Sanitizes event properties to guarantee strict exclusion of PII and sensitive form contents.
 */
export function sanitizeEventProperties(
  props?: Record<string, unknown>
): SafeEventProperties {
  if (!props) return {};

  const clean: SafeEventProperties = {};
  for (const [key, value] of Object.entries(props)) {
    // If key matches forbidden list or is an object/array, reject it
    const isForbidden = FORBIDDEN_PROPERTY_KEYS.some(
      (forbiddenKey) => forbiddenKey.toLowerCase() === key.toLowerCase()
    );

    if (isForbidden) {
      continue; // Silently drop sensitive form contents
    }

    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      // Limit string length to 100 characters to prevent accidental text blobs
      clean[key] = typeof value === "string" ? value.slice(0, 100) : value;
    }
  }

  return clean;
}

/**
 * Privacy-first event logger with fail-open fallback.
 * Sends events to internal telemetry collector asynchronously.
 * Never interrupts visitor experience if telemetry is unavailable.
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  properties?: SafeEventProperties
): void {
  try {
    if (!isValidAnalyticsEvent(eventName)) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[RECKAI Analytics]: Rejected invalid event name: "${eventName}"`);
      }
      return;
    }

    const safeProps = sanitizeEventProperties(properties);

    const eventPayload: AnalyticsEvent = {
      event: eventName,
      properties: {
        ...safeProps,
        timestamp: Date.now(),
      },
    };

    if (typeof window !== "undefined") {
      // Send asynchronously via sendBeacon or non-blocking fetch
      const payloadString = JSON.stringify(eventPayload);

      if (navigator.sendBeacon) {
        const blob = new Blob([payloadString], { type: "application/json" });
        navigator.sendBeacon("/api/telemetry/events", blob);
      } else {
        fetch("/api/telemetry/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payloadString,
          keepalive: true,
        }).catch(() => {
          // Fail open: silently catch network exceptions
        });
      }

      // If third-party privacy-respecting provider is configured (e.g. Plausible)
      const win = window as unknown as { plausible?: (...args: unknown[]) => void };
      if (typeof win.plausible === "function") {
        win.plausible(eventName, { props: safeProps });
      }

      if (process.env.NODE_ENV === "development") {
        console.log(`[RECKAI Analytics Tracked]: ${eventName}`, safeProps);
      }
    }
  } catch (err) {
    // Failsafe: website continues working seamlessly even if analytics throws
    if (process.env.NODE_ENV === "development") {
      console.error("[RECKAI Analytics Error]:", err);
    }
  }
}

/**
 * Dispatches Web Vitals performance telemetry to internal observer.
 */
export function reportWebVitals(metric: WebVitalsMetric): void {
  try {
    if (typeof window === "undefined") return;

    const payload = JSON.stringify(metric);
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/telemetry/vitals", blob);
    } else {
      fetch("/api/telemetry/vitals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Fail silently
  }
}
