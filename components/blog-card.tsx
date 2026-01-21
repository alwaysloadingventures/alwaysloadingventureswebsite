import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card
        className={`h-full border-border/30 shadow-md bg-card/70 ring-1 ring-inset ring-white/[0.04] hover:border-primary/30 hover:shadow-lg transition-all duration-200 ${
          featured ? "lg:col-span-2" : ""
        }`}
      >
        <CardHeader className="h-full flex flex-col">
          {/* Meta row */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] px-2 py-0.5"
              >
                {tag}
              </Badge>
            ))}
            <span className="text-[11px] text-muted-foreground/60">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground/60">
              <Clock className="h-3 w-3" />
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <CardTitle
            className={`group-hover:text-primary transition-colors ${
              featured ? "text-xl sm:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </CardTitle>

          {/* Description */}
          <CardDescription
            className={`leading-relaxed mt-2 flex-1 ${
              featured ? "text-sm" : "text-sm line-clamp-2"
            }`}
          >
            {post.description}
          </CardDescription>

          {/* Read more */}
          <div className="flex items-center gap-1 text-sm text-primary mt-4 group-hover:gap-2 transition-all">
            Read more
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
