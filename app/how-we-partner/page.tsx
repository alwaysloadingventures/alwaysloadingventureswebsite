import { PageHeader } from "@/components/layout-primitives";

export default function HowWePartnerPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Partnership Models"
        title="How We Partner"
        description="We don't believe in one-size-fits-all engagements. Every partnership is structured around outcomes, incentives, and execution responsibility."
      />

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Engagement Models</h2>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">Advisory:</strong> Retainers or
            defined projects
          </li>
          <li>
            <strong className="text-foreground">Hybrid:</strong> Cash + equity
          </li>
          <li>
            <strong className="text-foreground">Equity for Execution:</strong>{" "}
            Hands-on leadership with ownership
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What We Don't Do</h2>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <li>No generic coaching or courses</li>
          <li>No free consulting</li>
          <li>No passive investing</li>
          <li>No engagements without decision access</li>
          <li>No high-volume client work</li>
        </ul>
      </section>
    </div>
  );
}
