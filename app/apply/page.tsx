import Link from "next/link";

export default function ApplyPage() {
  return (
    <main>
      <h1>Apply</h1>
      <p>
        We work with a limited number of companies at a time. Applications help
        us determine fit before any conversation.
      </p>
      <p>Choose the path that best reflects what you're looking for.</p>

      <div>
        <Link href="/apply/advisory">Apply for Advisory</Link>
        <Link href="/apply/partnership">Apply for Strategic Partnership</Link>
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
