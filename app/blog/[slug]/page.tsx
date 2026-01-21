import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, getAdjacentPosts } from "@/lib/blog";
import { buttonVariants } from "@/lib/button-variants";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <article className="space-y-8">
      {/* Back link */}
      <Link
        href="/blog"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: "gap-2 -ml-2",
        })}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <p className="text-sm text-muted-foreground/70">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <span className="text-muted-foreground/50">•</span>
          <p className="text-sm text-muted-foreground/70">{post.author}</p>
          <span className="text-muted-foreground/50">•</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground/70">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} min read
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-2xl">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <Separator className="bg-border/40" />

      {/* Content with Typography/Prose styling */}
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/30
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
          prose-p:text-muted-foreground/85 prose-p:leading-[1.8]
          prose-li:text-muted-foreground/85 prose-li:leading-[1.7] prose-li:my-1
          prose-ul:my-4 prose-ol:my-4
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-card prose-pre:border prose-pre:border-border/30 prose-pre:rounded-lg
          prose-blockquote:border-l-primary prose-blockquote:border-l-2 prose-blockquote:text-muted-foreground/70 prose-blockquote:italic prose-blockquote:pl-4
          prose-hr:border-border/40 prose-hr:my-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Separator className="bg-border/40" />

      {/* Next/Previous Navigation */}
      {(prev || next) && (
        <nav className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group">
              <Card className="h-full border-border/30 bg-card/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" />
                    Previous
                  </p>
                  <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                    {prev.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link href={`/blog/${next.slug}`} className="group">
              <Card className="h-full border-border/30 bg-card/50 hover:border-primary/30 transition-colors text-right">
                <CardHeader>
                  <p className="text-xs text-muted-foreground/60 flex items-center gap-1 justify-end">
                    Next
                    <ArrowRight className="h-3 w-3" />
                  </p>
                  <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                    {next.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          )}
        </nav>
      )}

      <Separator className="bg-border/40" />

      {/* Footer CTA */}
      <section className="text-center space-y-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15]">
          Want to Work Together?
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-lg mx-auto leading-[1.6]">
          If this resonates with how you think about building, we should talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/apply/advisory"
            className={buttonVariants({ size: "lg", className: "px-8" })}
          >
            Apply for Advisory
          </Link>
          <Link
            href="/apply/partnership"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "px-8",
            })}
          >
            Apply for Strategic Partnership
          </Link>
        </div>
      </section>
    </article>
  );
}
