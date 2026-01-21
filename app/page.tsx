import Link from "next/link";
import { buttonVariants } from "@/lib/button-variants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  Package,
  Settings,
  Share2,
  Layers,
  Users,
  Rocket,
  UserPlus,
} from "lucide-react";
import { getLatestPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";
import { TrackRecordChart } from "@/components/track-record/track-record-chart";

const provenOutcomes = [
  { label: "Company A", industry: "Trading Tech / Fintech Adjacent", result: "$0 → $250M", timeframe: "4 years" },
  { label: "Company B", industry: "Digital Products & Subscriptions", result: "$0 → $20M", timeframe: "2 years" },
  { label: "Company C", industry: "Prediction Markets / Gaming", result: "$0 → $2M", timeframe: "1 year" },
  { label: "Company D", industry: "Marketplace / E-commerce", result: "$0 → $10M", timeframe: "1.5 years" },
];

const toolbox = [
  {
    title: "Growth Strategy",
    description: "Scalable acquisition and retention systems",
    icon: TrendingUp,
  },
  {
    title: "Product Development",
    description: "Roadmaps, prioritization, and shipping cadence",
    icon: Package,
  },
  {
    title: "Operations",
    description: "Processes, automation, and efficiency",
    icon: Settings,
  },
  {
    title: "Distribution",
    description: "Channels, partnerships, and go-to-market",
    icon: Share2,
  },
  {
    title: "Systems Design",
    description: "Architecture that scales with growth",
    icon: Layers,
  },
  {
    title: "Executive Leadership",
    description: "Strategic direction and decision-making",
    icon: Users,
  },
  {
    title: "Go-to-Market",
    description: "Launch strategy and market positioning",
    icon: Rocket,
  },
  {
    title: "Team Building",
    description: "Hiring, structure, and culture",
    icon: UserPlus,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section with spotlight glow */}
      <section className="relative">
        {/* Spotlight glow - ultra-soft ambient */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 blur-[160px] rounded-full" />
        </div>

        <div className="space-y-6 rounded-2xl border border-border/40 bg-card/50 p-6 sm:p-10 backdrop-blur-sm shadow-md ring-1 ring-inset ring-white/[0.03]">
          <div className="flex items-center gap-3">
            <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
              Operator-Led
            </p>
            <Badge variant="secondary" className="text-[11px]">Venture Studio</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
            Venture Studio & Advisory Firm
          </h1>
          <p className="text-base sm:text-lg leading-[1.7] text-muted-foreground/90 max-w-2xl">
            We partner with founders and operators to scale businesses through
            execution, systems, and strategic leadership — not just advice.
          </p>
          <p className="text-sm sm:text-base leading-[1.7] text-muted-foreground/70 max-w-2xl">
            We leverage AI-assisted operations and deep operator experience to
            drive outcomes faster. From paid advisory to equity partnerships, we
            work where we can materially move outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              href="/apply/advisory"
              className={buttonVariants({
                size: "lg",
                className: "w-full sm:w-auto px-8",
              })}
            >
              Apply for Advisory
            </Link>
            <Link
              href="/apply/partnership"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto px-8",
              })}
            >
              Apply for Strategic Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Outcomes - 4 mini cards */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            Track Record
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Proven Outcomes Across Multiple Ventures
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            We've scaled ventures across trading platforms, prediction markets, digital products, and regulated gaming — from zero to meaningful revenue. Company names withheld due to confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {provenOutcomes.map((outcome) => (
            <Card key={outcome.label} size="sm" className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
              <CardContent className="pt-4 space-y-1.5">
                <p className="text-xs font-medium text-foreground/90 tracking-wide uppercase">{outcome.label}</p>
                <p className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                  {outcome.result}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/90">
                  in {outcome.timeframe}
                </p>
                <p className="text-[10px] text-muted-foreground/70 leading-tight">
                  {outcome.industry}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Growth Chart */}
        <Card className="border-border/30 shadow-md bg-card/50 ring-1 ring-inset ring-white/[0.04] p-4 sm:p-6">
          <TrackRecordChart />
          <p className="text-[11px] text-muted-foreground/60 text-center mt-4 leading-relaxed max-w-xl mx-auto">
            Anonymized outcomes shown for context. Results reflect contributions as part of broader teams and are not guarantees.
          </p>
        </Card>

        <div className="flex justify-center">
          <Link
            href="#operator-toolbox"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "text-xs",
            })}
          >
            See the Operator Toolbox
          </Link>
        </div>
      </section>

      {/* Engagements - 2 big cards */}
      <section className="relative space-y-6">
        {/* Spotlight glow - ultra-soft ambient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 blur-[180px] rounded-full" />
        </div>

        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            How We Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Engagement Models
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <Card className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg sm:text-xl tracking-tight">Advisory</CardTitle>
              <CardDescription className="leading-[1.6] text-muted-foreground/75">
                Hands-on executive advisory for teams ready to implement.
                Structured engagements with clear deliverables across strategy,
                operations, growth, product, and systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4">
              <Link
                href="/apply/advisory"
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                Apply for Advisory
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg sm:text-xl tracking-tight">Strategic Partnership</CardTitle>
              <CardDescription className="leading-[1.6] text-muted-foreground/75">
                Equity-based partnerships for ventures where we take an active
                operational role alongside founders. Capital may be involved —
                execution always is.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-4">
              <Link
                href="/apply/partnership"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Apply for Strategic Partnership
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Operator Toolbox - Icon Grid */}
      <section id="operator-toolbox" className="space-y-6 scroll-mt-20">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            What We Bring
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Operator Toolbox
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Core competencies we deploy across advisory and partnership engagements.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {toolbox.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                size="sm"
                className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04]"
              >
                <CardContent className="pt-4 space-y-2">
                  <Icon className="h-5 w-5 text-primary/70" />
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Thoughts & Experiments - Latest Blog Posts */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="uppercase text-[11px] tracking-[0.15em] text-muted-foreground/70 font-medium">
            From the Blog
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
            Thoughts & Experiments
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl leading-[1.6]">
            Tactical insights on growth, operations, product, and building scalable businesses.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getLatestPosts(3).map((post, index) => (
            <BlogCard key={post.slug} post={post} featured={index === 0} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/blog"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "px-8",
            })}
          >
            View All Posts
          </Link>
        </div>
      </section>

      <Separator className="bg-border/40" />

      {/* Final CTA */}
      <section className="text-center space-y-6 py-4 sm:py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Ready to Scale?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          We work with a limited number of companies at a time. Applications
          help us determine fit before any conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/apply/advisory"
            className={buttonVariants({
              size: "lg",
              className: "w-full sm:w-auto px-10",
            })}
          >
            Apply for Advisory
          </Link>
          <Link
            href="/apply/partnership"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto px-10",
            })}
          >
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
