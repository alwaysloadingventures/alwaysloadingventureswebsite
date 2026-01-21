import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures",
  description: "Important disclosures about AlwaysLoading Ventures.",
};

export default function DisclosuresPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
          Disclosures
        </h1>
        <p className="text-sm text-muted-foreground/60">
          Last updated: January 2026
        </p>
      </div>

      <div className="prose prose-sm prose-invert max-w-none space-y-6 text-muted-foreground/80">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Not a Registered Investment Fund</h2>
          <p>
            AlwaysLoading Ventures LLC is not a registered investment adviser, broker-dealer, or investment fund. We do not offer or sell securities. Our services consist of advisory and operational support provided on a consulting basis.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Engagement Structure</h2>
          <p>
            All engagements with AlwaysLoading Ventures are structured on a case-by-case basis. Terms, including compensation structure (retainer, equity, or hybrid), scope of work, and duration are negotiated individually with each partner.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">No Guarantee of Results</h2>
          <p>
            While we bring operational experience and expertise to our engagements, we cannot and do not guarantee specific business outcomes. Results depend on many factors beyond our control, including market conditions, team execution, and external circumstances.
          </p>
          <p>
            Any case studies, testimonials, or examples of past work are provided for illustrative purposes only and do not guarantee similar results for future engagements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Track Record Claims</h2>
          <p>
            References to past experience, revenue figures, or business outcomes reflect work performed by individuals associated with AlwaysLoading Ventures in various capacities (as founders, operators, advisors, or consultants) at different companies. These results were achieved as part of broader teams and do not represent guarantees of future performance.
          </p>
          <p>
            Company names may be withheld due to confidentiality obligations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Conflicts of Interest</h2>
          <p>
            AlwaysLoading Ventures may work with multiple companies in similar or adjacent markets. We maintain appropriate information barriers and confidentiality practices. We disclose potential conflicts to partners before engagement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Equity Positions</h2>
          <p>
            In strategic partnership engagements, AlwaysLoading Ventures or its principals may receive equity compensation. Such positions are disclosed to all relevant parties. We may continue to hold equity positions after active engagement has concluded.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Information Accuracy</h2>
          <p>
            We strive to ensure information on this website is accurate and current. However, we make no warranties about the completeness, reliability, or accuracy of this information. Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Independent Advice</h2>
          <p>
            The information provided on this website and through our services is not a substitute for professional legal, financial, tax, or other advice. We encourage all prospective and current partners to seek independent professional advice appropriate to their circumstances.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For questions about these disclosures, please contact us at partnerships@alwaysloading.net
          </p>
        </section>
      </div>
    </div>
  );
}
