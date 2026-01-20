import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-dark.svg"
            alt="AlwaysLoading Ventures"
            width={160}
            height={40}
            className="h-6 w-auto"
          />
          <span className="text-muted-foreground">—</span>
          <p className="text-sm text-muted-foreground">
            Operator-Led Venture Studio & Advisory Firm
          </p>
        </div>
        <Separator className="my-4" />
        <p className="text-sm text-muted-foreground">
          Disclaimer: AlwaysLoading Ventures is not a registered investment
          fund. All engagements are structured on a case-by-case basis.
        </p>
      </div>
    </footer>
  );
}
