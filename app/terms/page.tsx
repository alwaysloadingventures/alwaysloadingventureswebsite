import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for AlwaysLoading Ventures website and services.",
};

export default function TermsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
          Terms of Use
        </h1>
        <p className="text-sm text-muted-foreground/60">
          Last updated: January 2026
        </p>
      </div>

      <div className="prose prose-sm prose-invert max-w-none space-y-6 text-muted-foreground/80">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Description of Services</h2>
          <p>
            AlwaysLoading Ventures LLC provides advisory and venture studio services to select companies. This website provides information about our services and allows prospective partners to submit applications.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">No Investment Advice</h2>
          <p>
            Nothing on this website constitutes investment advice, financial advice, trading advice, or any other advice. The information provided is for general informational purposes only. You should not make any decision, financial, investment, trading or otherwise, based on any of the information presented without undertaking independent due diligence and consultation with a professional advisor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">No Guarantees</h2>
          <p>
            Past results and testimonials are not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed. We make no guarantees regarding specific outcomes from any engagement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of AlwaysLoading Ventures LLC and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">User Submissions</h2>
          <p>
            By submitting an application or other information through this website, you grant us the right to review and evaluate such information for business purposes. We will handle your information in accordance with our Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, AlwaysLoading Ventures LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For questions about these Terms, please contact us at legal@alwaysloading.vc
          </p>
        </section>
      </div>
    </div>
  );
}
