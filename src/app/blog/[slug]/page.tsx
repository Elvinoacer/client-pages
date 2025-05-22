// src/app/blog/[slug]/page.tsx
"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { blogPosts } from "@/lib/constants/blogPosts";
import BlogCard from "@/components/content/BlogCard";
import React from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{post.publishedAt}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>

          {post.image && (
            <div className="mt-6 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          )}
          <div
            className="mt-8 prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Related Posts
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
