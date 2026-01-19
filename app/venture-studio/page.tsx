import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";

export default function VentureStudioPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Venture Studio</h1>
        <p className="text-xl text-muted-foreground">
          Our venture studio exists to build and scale businesses, not just
          advise them. We focus on internal ventures, co-built companies, and
          platform extensions where execution drives value.
        </p>
      </section>

      <div>
        <Link href="/apply/partnership" className={buttonVariants()}>
          Apply for Venture Studio Partnership
        </Link>
      </div>
    </div>
  );
}
