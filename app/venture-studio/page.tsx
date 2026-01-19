import Link from "next/link";

export default function VentureStudioPage() {
  return (
    <main>
      <h1>Venture Studio</h1>
      <p>
        Our venture studio exists to build and scale businesses, not just advise
        them. We focus on internal ventures, co-built companies, and platform
        extensions where execution drives value.
      </p>

      <div>
        <Link href="/apply/partnership">Apply for Venture Studio Partnership</Link>
      </div>

      <footer>
        <p>AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory Firm</p>
        <p>
          Disclaimer: AlwaysLoading Ventures is not a registered investment
          fund. All engagements are structured on a case-by-case basis.
        </p>
      </footer>
    </main>
  );
}
