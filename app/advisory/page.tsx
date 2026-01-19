import Link from "next/link";

export default function AdvisoryPage() {
  return (
    <main>
      <h1>Advisory</h1>
      <p>
        Our advisory work is built for operators who want results, not theory.
        Engagements are outcome-driven, structured, and execution-focused.
      </p>

      <div>
        <Link href="/apply/advisory">Apply for Advisory</Link>
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
