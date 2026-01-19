import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";

export default function AdvisoryPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Advisory</h1>
        <p className="text-xl text-muted-foreground">
          Our advisory work is built for operators who want results, not theory.
          Engagements are outcome-driven, structured, and execution-focused.
        </p>
      </section>

      <div>
        <Link href="/apply/advisory" className={buttonVariants()}>
          Apply for Advisory
        </Link>
      </div>
    </div>
  );
}
