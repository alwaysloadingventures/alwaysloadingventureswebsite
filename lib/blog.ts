import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
}

export interface AdjacentPosts {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
}

function calculateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / WORDS_PER_MINUTE);
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  return posts;
}

export function getLatestPosts(count: number = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "AlwaysLoading Ventures",
    tags: data.tags || [],
    readTime: calculateReadTime(content),
  };
}

export function getAdjacentPosts(currentSlug: string): AdjacentPosts {
  const posts = getAllPosts();
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);

  return {
    prev: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    next: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "AlwaysLoading Ventures",
    tags: data.tags || [],
    readTime: calculateReadTime(content),
    content: contentHtml,
  };
}
