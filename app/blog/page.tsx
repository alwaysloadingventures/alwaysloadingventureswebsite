import { PageHeader } from "@/components/layout-primitives";
import { BlogSearch } from "@/components/blog-search";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Badge variant="secondary" className="text-[11px]">
          Blog
        </Badge>
        <PageHeader
          title="Thoughts & Experiments"
          description="Operator-grade thinking on systems, execution, and scale. Practical insights from building and scaling businesses — not theory, not thought leadership, just what works."
        />
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <BlogSearch posts={posts} />
      )}
    </div>
  );
}
