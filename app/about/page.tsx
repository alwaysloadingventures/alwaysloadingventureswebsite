import { PageHeader } from "@/components/layout-primitives";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Who We Are"
        title="About"
        description="AlwaysLoading Ventures was built by operators who have scaled businesses from zero to significant revenue. Our philosophy is simple:"
      />

      <ul className="list-disc list-inside space-y-3 text-base sm:text-lg leading-relaxed text-muted-foreground">
        <li>Systems beat hustle</li>
        <li>Distribution matters as much as product</li>
        <li>Incentives drive outcomes</li>
        <li>Ownership should reflect contribution</li>
      </ul>
    </div>
  );
}
