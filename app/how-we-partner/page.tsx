export default function HowWePartnerPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">How We Partner</h1>
        <p className="text-xl text-muted-foreground">
          We don't believe in one-size-fits-all engagements. Every partnership
          is structured around outcomes, incentives, and execution
          responsibility.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Engagement Models</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What We Don't Do</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
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
