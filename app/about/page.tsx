export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-xl text-muted-foreground">
          AlwaysLoading Ventures was built by operators who have scaled
          businesses from zero to significant revenue. Our philosophy is simple:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Systems beat hustle</li>
          <li>Distribution matters as much as product</li>
          <li>Incentives drive outcomes</li>
          <li>Ownership should reflect contribution</li>
        </ul>
      </section>
    </div>
  );
}
