import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <p className="font-medium">
          AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory Firm
        </p>
        <Separator className="my-4" />
        <p className="text-sm text-muted-foreground">
          Disclaimer: AlwaysLoading Ventures is not a registered investment
          fund. All engagements are structured on a case-by-case basis.
        </p>
      </div>
    </footer>
  );
}
