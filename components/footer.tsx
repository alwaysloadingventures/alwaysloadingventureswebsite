import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
          <Image
            src="/logo-dark.svg"
            alt="AlwaysLoading Ventures"
            width={220}
            height={44}
            className="h-9 sm:h-10 w-auto"
          />
          <span className="hidden sm:block text-muted-foreground/50">—</span>
          <p className="text-sm text-muted-foreground/70">
            Operator-Led Venture Studio & Advisory Firm
          </p>
        </div>
        <Separator className="my-6 bg-border/50" />
        <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-2xl">
          Disclaimer: AlwaysLoading Ventures is not a registered investment
          fund. All engagements are structured on a case-by-case basis.
        </p>
      </div>
    </footer>
  );
}
