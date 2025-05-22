import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: any }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm dark:border-gray-700">
      {post.image && (
        <div className="aspect-video relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{post.publishedAt}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
