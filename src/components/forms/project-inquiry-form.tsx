"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { projectInquirySchema } from "@/lib/validation/project-inquiry";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics/events";

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  description: string;
  problem: string;
  whoIsItFor: string;
  projectType: string;
  stage: string;
  aiRequirements: string;
  referenceUrl: string;
  timeline: string;
  budget: string;
  additionalRequirements: string;
  honeypot: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  description: "",
  problem: "",
  whoIsItFor: "",
  projectType: "AI PRODUCT",
  stage: "JUST AN IDEA",
  aiRequirements: "",
  referenceUrl: "",
  timeline: "1–3 months",
  budget: "Not sure yet",
  additionalRequirements: "",
  honeypot: "",
};

const STEPS = [
  { number: 1, title: "About You", subtitle: "Identity & Context" },
  { number: 2, title: "Your Idea", subtitle: "Problem & Concept" },
  { number: 3, title: "Product Scope", subtitle: "Archetype & Stage" },
  { number: 4, title: "Parameters", subtitle: "Timeline & Budget" },
];

export function ProjectInquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    trackEvent("project_form_start");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        stepErrors.name = "Please enter your name (minimum 2 characters)";
      }
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        stepErrors.email = "Please provide a valid email address";
      }
    } else if (step === 2) {
      if (!formData.description.trim() || formData.description.trim().length < 10) {
        stepErrors.description = "Please describe what you want to build (at least 10 characters)";
      }
      if (!formData.problem.trim() || formData.problem.trim().length < 10) {
        stepErrors.problem = "Please describe the problem to solve (at least 10 characters)";
      }
    } else if (step === 3) {
      if (!formData.projectType) {
        stepErrors.projectType = "Please select a project type";
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setServerError(null);
      const nextStep = Math.min(currentStep + 1, 4);
      trackEvent("project_form_step", { step: nextStep });
      setCurrentStep(nextStep);
    }
  };

  const handleBack = () => {
    setServerError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate current step
    if (!validateStep(currentStep)) {
      trackEvent("project_form_error", { step: currentStep });
      return;
    }

    // Full client-side Zod validation
    const result = projectInquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (path && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      trackEvent("project_form_error", { step: currentStep });
      return;
    }

    setIsSubmitting(true);
    // Track submission event strictly without PII (no name, email, budget, or problem description)
    trackEvent("project_form_submit", {
      category: formData.projectType,
    });

    try {
      const res = await fetch("/api/project-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "Something went wrong while sending your project details.");
      }

      setSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your project details.";
      setServerError(message);
      trackEvent("project_form_error", { step: currentStep });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* -----------------------------------------------------------------------
     SUCCESS STATE (Section 28)
     ----------------------------------------------------------------------- */
  if (submitted) {
    return (
      <div className="rounded-3xl border border-violet-200/80 bg-gradient-to-b from-white to-violet-50/30 p-8 sm:p-14 text-center dark:border-violet-900/40 dark:from-neutral-900 dark:to-neutral-950 space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300 text-xl font-bold">
          ✓
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            We&rsquo;ve got it.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Your idea is now with RECKAI. We&rsquo;ll review what you&rsquo;ve shared and figure out the right next step.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link href="/">
            <Button variant="outline" size="md">
              Back to RECKAI
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="primary" size="md" arrow="right">
              Explore Our Work
            </Button>
          </Link>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
            }}
            className="text-xs font-mono text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline transition-colors"
          >
            Submit another project concept
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Multi-Step Stepper Progress Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-violet-600 dark:text-violet-400 font-bold uppercase tracking-wider">
            STEP 0{currentStep} / 04 — {STEPS[currentStep - 1].title}
          </span>
          <span className="text-neutral-400">
            {STEPS[currentStep - 1].subtitle}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {STEPS.map((s) => (
            <div
              key={s.number}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentStep >= s.number
                  ? "bg-violet-600 dark:bg-violet-400"
                  : "bg-neutral-200 dark:bg-neutral-800"
              }`}
            />
          ))}
        </div>
      </div>

      {serverError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-300 flex items-center justify-between gap-4">
          <span>{serverError}</span>
          <button
            type="button"
            onClick={() => setServerError(null)}
            className="font-bold underline text-xs"
          >
            Dismiss
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Anti-spam honeypot (invisible to humans) */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        {/* -----------------------------------------------------------------
            STEP 01 — ABOUT YOU
            ----------------------------------------------------------------- */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Who are you?
              </h3>
              <p className="text-xs text-neutral-500">
                Let us know how to address you and follow up on your project inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Company / Organization (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Synthetix Labs or Stealth Venture"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Your Role (Optional)
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Founder, CTO, VP Product, Head of AI"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            STEP 02 — YOUR IDEA
            ----------------------------------------------------------------- */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Tell us about the idea & friction
              </h3>
              <p className="text-xs text-neutral-500">
                What problem are you seeking to eliminate, and what do you envision building?
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                What are you trying to build? *
              </label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the envisioned product, core workflows, or key deliverables..."
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-500">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                What problem are you solving? *
              </label>
              <textarea
                name="problem"
                rows={3}
                value={formData.problem}
                onChange={handleChange}
                placeholder="What user pain point, market inefficiency, or technical friction exists today?"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />
              {errors.problem && <p className="mt-1 text-xs text-red-500">{errors.problem}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                Who is it for? (Optional)
              </label>
              <input
                type="text"
                name="whoIsItFor"
                value={formData.whoIsItFor}
                onChange={handleChange}
                placeholder="e.g. Enterprise logistics teams, high-net-worth investors, independent creatives"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            STEP 03 — PRODUCT SCOPE
            ----------------------------------------------------------------- */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Product Archetype & Readiness
              </h3>
              <p className="text-xs text-neutral-500">
                Help us understand the domain and current status of your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Project Archetype *
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                >
                  <option value="AI PRODUCT">AI Product (End-to-End Intelligent App)</option>
                  <option value="WEB APPLICATION">Web Application (React / Next.js)</option>
                  <option value="MOBILE APPLICATION">Mobile Application (iOS / Android)</option>
                  <option value="AUTOMATION">Intelligent Workflow Automation</option>
                  <option value="DATA / INTELLIGENCE SYSTEM">Data & Decision Intelligence System</option>
                  <option value="CUSTOM PLATFORM">Custom Platform / Core Architecture</option>
                  <option value="OTHER">Other / Exploratory</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Current Stage
                </label>
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                >
                  <option value="JUST AN IDEA">Just an Idea (Early Concept)</option>
                  <option value="VALIDATING">Validating (Research / Market Discovery)</option>
                  <option value="PROTOTYPE">Prototype (Need Proof of Concept)</option>
                  <option value="MVP">MVP (Ready to Build First Production Version)</option>
                  <option value="EXISTING PRODUCT">Existing Product (Modernization / Refactor)</option>
                  <option value="SCALING">Scaling (Growth / Performance Optimization)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                AI & Intelligence Requirements (Optional)
              </label>
              <textarea
                name="aiRequirements"
                rows={2}
                value={formData.aiRequirements}
                onChange={handleChange}
                placeholder="e.g. Vision classification, embeddings, LLM agent workflows, time-series prediction..."
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                Existing Product / Prototype URL (Optional)
              </label>
              <input
                type="url"
                name="referenceUrl"
                value={formData.referenceUrl}
                onChange={handleChange}
                placeholder="https://yourproduct.com or Figma/GitHub link"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />
              {errors.referenceUrl && (
                <p className="mt-1 text-xs text-red-500">{errors.referenceUrl}</p>
              )}
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            STEP 04 — PROJECT PARAMETERS
            ----------------------------------------------------------------- */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Project Parameters & Timing
              </h3>
              <p className="text-xs text-neutral-500">
                Define your target timeframe, budget guidance, and any additional notes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Target Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                >
                  <option value="Under 1 month">Under 1 month (Rapid Spike / Prototype)</option>
                  <option value="1–3 months">1–3 months (Production MVP)</option>
                  <option value="3–6 months">3–6 months (Comprehensive Build)</option>
                  <option value="Flexible">Flexible / Strategic Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                  Estimated Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                >
                  <option value="Not sure yet">Not sure yet (Need Technical Scoping)</option>
                  <option value="Under $10k">Under $10,000</option>
                  <option value="$10k - $25k">$10,000 – $25,000</option>
                  <option value="$25k - $50k">$25,000 – $50,000</option>
                  <option value="$50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                Additional Requirements / Constraints (Optional)
              </label>
              <textarea
                name="additionalRequirements"
                rows={3}
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="Mention any specific compliance needs (HIPAA, SOC2), legacy database integrations, or technical constraints..."
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
              />
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            BACK / NEXT / SUBMIT CONTROLS
            ----------------------------------------------------------------- */}
        <div className="flex items-center justify-between pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              ← Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNext}
              arrow="right"
            >
              Continue to Step 0{currentStep + 1}
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              arrow="up-right"
            >
              {isSubmitting ? "Submitting Inquiry..." : "Submit Project Specifications"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
