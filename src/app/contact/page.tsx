import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  title: "Contact RECKAI — Direct Inquiries",
  description:
    "Get in touch with the RECKAI team for general inquiries, collaborations, and discussions.",
};

export default function ContactPage() {
  return (
    <div className="py-20 space-y-16">
      <Container className="space-y-4 max-w-4xl">
        <Badge variant="violet">Communication</Badge>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Contact RECKAI
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          For general questions, collaborations, or discussions with the technical team, send us a direct message below. If you have a specific product or system requirement, consider using our dedicated project intake engine.
        </p>
      </Container>

      <Container className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold">Direct Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200 block mb-0.5">
                    Inquiries:
                  </span>
                  <a href={`mailto:${siteConfig.contact.inquiries}`} className="text-violet-600 dark:text-violet-400 hover:underline font-mono text-sm">
                    {siteConfig.contact.inquiries}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200 block mb-0.5">
                    General:
                  </span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-violet-600 dark:text-violet-400 hover:underline font-mono text-sm">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 dark:bg-neutral-900/40">
              <CardHeader>
                <CardTitle className="text-sm">Looking to start a build?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  For structured project scoping with budget and timeline considerations:
                </p>
                <a
                  href="/start-project"
                  className="text-xs font-semibold text-violet-600 hover:underline"
                >
                  Go to Start a Project →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
