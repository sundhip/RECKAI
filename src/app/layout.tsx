import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/lib/config/site";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "RECKAI" }],
  creator: "RECKAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@reckai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkPubKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    "pk_test_cmVja2FpLXBsYWNlaG9sZGVyLWtleS5jbGVyay5hY2NvdW50cy5kZXYk";

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        variables: {
          colorPrimary: "#7c3aed",
          colorBackground: "#0a0a0a",
          colorText: "#ffffff",
          colorInputBackground: "#171717",
          colorInputText: "#ffffff",
        },
      }}
    >
      <html lang="en" className="scroll-smooth">
        <body className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased dark:bg-reckai-dark dark:text-neutral-100 selection:bg-violet-500 selection:text-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
