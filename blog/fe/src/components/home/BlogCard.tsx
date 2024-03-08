import { base64 } from "@/libs/common/base64";
import { Blog } from "@/types/blog";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ post }: { post: Blog }) => {
  return (
    <Link
      className={
        "shadow-card group flex h-fit w-full flex-col gap-2 rounded-xl bg-white p-4 duration-200 dark:bg-zinc-800 xl:p-5"
      }
      href={`/${post.postId}`}
    >
      <Image
        src="https://images.ctfassets.net/fvv8n6m8vn6b/FVIgKxlLAHPHdXvGEx2Jk/be1c2d9f260de24dde240e3aa4eb0845/introducing-pridox.webp?w=1200&q=75"
        alt={post.postId.toString()}
        title={post.title}
        width={768}
        height={432}
        className="aspect-video h-auto w-full rounded-xl duration-200"
        priority
        placeholder="blur"
        blurDataURL={post.cover_picture || base64}
      />
      <div className="mt-5 flex h-auto flex-col px-2.5">
        <h2
          title={post.title}
          className="line-clamp-2 text-lg font-bold tracking-tight text-gray-900 duration-200 group-hover:text-violet-500 dark:text-gray-100 dark:hover:text-violet-500 md:text-base lg:text-xl xl:text-2xl"
        >
          {post.title}
        </h2>
        <p className="mt-2.5 line-clamp-2 text-sm text-gray-500 dark:text-gray-400 xl:text-base">
          {post.body}
        </p>
        <div className="mt-4 flex w-full flex-row gap-3 rounded-xl bg-zinc-100 px-4 py-3 dark:bg-zinc-700 lg:mt-6 xl:mt-8 2xl:mt-10">
          <div className="w-10 2xl:w-12">
            <Avatar />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm font-bold text-gray-900 dark:text-gray-50 lg:text-base">
              Minh Vu
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300 lg:text-sm">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
