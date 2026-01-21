import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-8">
        {/* Main footer row: Logo left, Copyright center, Social right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
          {/* Left: Logo + Entity */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-dark.svg"
              alt="AlwaysLoading Ventures"
              width={220}
              height={44}
              className="h-[40px] sm:h-[48px] w-auto"
            />
          </div>

          {/* Center: Copyright */}
          <p className="text-xs text-muted-foreground/60 sm:text-center">
            &copy; {currentYear} AlwaysLoading Ventures LLC
          </p>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/alwaysloading"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-foreground/80 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/alwaysloading"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-foreground/80 transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-border/30 my-6" />

        {/* Bottom row: Legal links left, Disclaimer right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground/50">
          {/* Legal links */}
          <nav className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-foreground/70 transition-colors"
            >
              Privacy
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              href="/terms"
              className="hover:text-foreground/70 transition-colors"
            >
              Terms
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              href="/disclosures"
              className="hover:text-foreground/70 transition-colors"
            >
              Disclosures
            </Link>
          </nav>

          {/* Disclaimer */}
          <p className="leading-relaxed max-w-md text-right">
            Not a registered investment fund. All engagements structured on a case-by-case basis.
          </p>
        </div>
      </div>
    </footer>
  );
}
