import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { PageHeader } from "@/components/layout-primitives";

export default function VentureStudioPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Build With Us"
        title="Venture Studio"
        description="Our venture studio exists to build and scale businesses, not just advise them. We focus on internal ventures, co-built companies, and platform extensions where execution drives value."
      />

      <div>
        <Link href="/apply/partnership" className={buttonVariants({ size: "lg" })}>
          Apply for Venture Studio Partnership
        </Link>
      </div>
    </div>
  );
}
