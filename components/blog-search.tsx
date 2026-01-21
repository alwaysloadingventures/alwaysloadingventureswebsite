"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/blog-card";
import { Search } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogSearchProps {
  posts: BlogPostMeta[];
}

export function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const searchLower = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="space-y-8">
      {/* Search input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
        <Input
          type="text"
          placeholder="Search posts by title or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 bg-card/50 border-border/40"
        />
      </div>

      {/* Results */}
      {filteredPosts.length === 0 ? (
        <p className="text-muted-foreground/70">
          No posts found matching "{query}"
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              featured={index === 0 && !query}
            />
          ))}
        </div>
      )}
    </div>
  );
}
