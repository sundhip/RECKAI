import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";

export const metadata = {
  title: "Start a Project — Let's build something worth shipping | RECKAI",
  description:
    "Tell us about the problem, idea, product, or system you're thinking about. RECKAI partners with founders and companies for full 0-to-1 intelligent product builds.",
};

export default function StartProjectPage() {
  return (
    <div className="py-20 sm:py-28 space-y-16">
      <Container className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-3">
          <Badge variant="default" className="font-mono text-xs tracking-widest font-bold">
            RECKAI BUILDS INTAKE
          </Badge>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Technical Discovery
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
          Let&rsquo;s build something worth shipping.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Tell us about the problem, idea, product, or system you&rsquo;re thinking about. We&rsquo;ll reckon with the problem before we start writing the solution.
        </p>

        <div className="flex items-center gap-6 pt-2 text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Direct Technical Review
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> Mutual NDA Standard
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">✓</span> No Sales Spam
          </span>
        </div>
      </Container>

      <Container className="max-w-3xl">
        <Card className="p-6 sm:p-10 shadow-elevated border-neutral-200/90 dark:border-neutral-800">
          <ProjectInquiryForm />
        </Card>
      </Container>
    </div>
  );
}
