import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { PageHeader } from "@/components/layout-primitives";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ApplyPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Get Started"
        title="Apply"
        description="We work with a limited number of companies at a time. Applications help us determine fit before any conversation."
      />

      <p className="text-base leading-relaxed text-muted-foreground">
        Choose the path that best reflects what you're looking for.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Advisory</CardTitle>
            <CardDescription className="leading-relaxed">
              Hands-on executive advisory for teams ready to implement.
              Structured engagements with clear deliverables.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/apply/advisory" className={buttonVariants({ size: "lg", className: "w-full" })}>
              Apply for Advisory
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Strategic Partnership</CardTitle>
            <CardDescription className="leading-relaxed">
              Equity-based partnerships for ventures where we take an active
              operational role alongside founders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/apply/partnership" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full" })}>
              Apply for Strategic Partnership
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
