import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";

export default function ApplyPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Apply</h1>
        <p className="text-xl text-muted-foreground">
          We work with a limited number of companies at a time. Applications
          help us determine fit before any conversation.
        </p>
        <p className="text-muted-foreground">
          Choose the path that best reflects what you're looking for.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/apply/advisory" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
          Apply for Advisory
        </Link>
        <Link href="/apply/partnership" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}>
          Apply for Strategic Partnership
        </Link>
      </div>
    </div>
  );
}
