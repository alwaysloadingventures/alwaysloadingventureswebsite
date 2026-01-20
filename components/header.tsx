"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-partner", label: "How We Partner" },
  { href: "/venture-studio", label: "Venture Studio" },
  { href: "/advisory", label: "Advisory" },
  { href: "/apply", label: "Apply" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-border/50">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
        {/* Brand - dominant visual element */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-dark.svg"
            alt="AlwaysLoading Ventures"
            width={280}
            height={56}
            className="h-11 sm:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav - secondary visual weight */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] tracking-wide transition-colors",
                isActive(link.href)
                  ? "text-foreground/90 font-medium"
                  : "text-muted-foreground/80 hover:text-foreground/90"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/apply" className={buttonVariants({ size: "sm" })}>
            Apply
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className={`lg:hidden ${buttonVariants({ variant: "ghost", size: "icon" })}`}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="px-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-5 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg",
                    isActive(link.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className={buttonVariants({ size: "lg", className: "w-full mt-2" })}
              >
                Apply
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
