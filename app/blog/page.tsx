import Link from "next/link";
import { PageHeader } from "@/components/layout-primitives";
import { getAllPosts } from "@/lib/blog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Insights"
        title="Blog"
        description="Tactical insights on growth, operations, product, and building scalable businesses."
      />

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04] hover:border-border/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-muted-foreground/60">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
