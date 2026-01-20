import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { PageHeader } from "@/components/layout-primitives";

export default function AdvisoryPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Work With Us"
        title="Advisory"
        description="Our advisory work is built for operators who want results, not theory. Engagements are outcome-driven, structured, and execution-focused."
      />

      <div>
        <Link href="/apply/advisory" className={buttonVariants({ size: "lg" })}>
          Apply for Advisory
        </Link>
      </div>
    </div>
  );
}
