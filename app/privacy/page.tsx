import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AlwaysLoading Ventures.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground/60">
          Last updated: January 2026
        </p>
      </div>

      <div className="prose prose-sm prose-invert max-w-none space-y-6 text-muted-foreground/80">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Overview</h2>
          <p>
            AlwaysLoading Ventures LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or engage with our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact Information:</strong> Name, email address, and other contact details you provide when submitting applications or inquiries.
            </li>
            <li>
              <strong>Business Information:</strong> Information about your company, role, and business metrics shared during the application process.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating system, and device identifiers.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluate applications and assess potential fit for advisory or partnership engagements</li>
            <li>Communicate with you about our services and opportunities</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist with our operations (e.g., hosting, analytics)</li>
            <li>Legal and regulatory authorities when required by law</li>
            <li>Professional advisors in connection with potential engagements (with your consent)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Cookies and Tracking</h2>
          <p>
            We may use cookies and similar technologies to enhance your experience and analyze website usage. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
          <p>
            For questions about this Privacy Policy, please contact us at partnerships@alwaysloading.net
          </p>
        </section>
      </div>
    </div>
  );
}
