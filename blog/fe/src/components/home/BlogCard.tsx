import { base64 } from "@/libs/common/base64";
import { Blog } from "@/types/blog";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
  post,
  style = "main",
}: {
  post: Blog;
  style?: "main" | "side" | "other";
}) => {
  switch (style) {
    case "main":
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
              {post.short_description}
            </p>
            <div className="mt-4 flex w-full flex-row gap-3 rounded-xl bg-zinc-100 px-4 py-3 dark:bg-zinc-700 lg:mt-6 xl:mt-8 2xl:mt-10">
              <div className="w-10 2xl:w-12">
                <Avatar />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-sm font-bold text-gray-900 dark:text-gray-50 lg:text-base">
                  {post.author_username}
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
      break;
    case "side":
      return (
        <Link
          className={
            "shadow-card group flex h-fit w-full flex-row items-stretch gap-2.5 rounded-xl bg-white p-2.5 duration-200 dark:bg-zinc-800 xl:gap-4 xl:p-3"
          }
          href={`/${post.postId}`}
        >
          <div className="col-span-3 ml-1 flex w-full flex-col gap-3 pt-1 lg:pt-2 2xl:ml-2">
            <h2
              title={post.title}
              className={[
                "line-clamp-1 text-sm font-bold tracking-tight text-gray-900 duration-200 group-hover:text-violet-500 dark:text-gray-100 dark:hover:text-violet-500 md:line-clamp-3 md:text-sm lg:line-clamp-1 lg:text-sm xl:line-clamp-2 xl:text-base",
              ].join(" ")}
            >
              {post.title}
            </h2>
            <p
              className={[
                "line-clamp-2 text-xs text-gray-500 duration-200 dark:text-gray-400 md:hidden lg:line-clamp-2 lg:text-xs xl:line-clamp-2 xl:text-sm",
              ].join(" ")}
            >
              {post.short_description}
            </p>
          </div>
          <Image
            src="https://images.ctfassets.net/fvv8n6m8vn6b/FVIgKxlLAHPHdXvGEx2Jk/be1c2d9f260de24dde240e3aa4eb0845/introducing-pridox.webp?w=1200&q=75"
            alt={post.postId.toString()}
            title={post.title}
            width={288}
            height={162}
            className="aspect-video w-32 rounded-lg duration-200 md:w-32 lg:w-40 xl:w-52 2xl:w-60"
            priority
            placeholder="blur"
            blurDataURL={post.cover_picture || base64}
          />
        </Link>
      );
      break;
    case "other":
      return (
        <Link
          className={
            "shadow-card group flex h-fit w-full flex-row gap-2.5 rounded-xl bg-white p-2 duration-200 dark:bg-zinc-800 xl:gap-4 xl:p-2.5"
          }
          href={`/${post.postId}`}
        >
          <Image
            src="https://images.ctfassets.net/fvv8n6m8vn6b/FVIgKxlLAHPHdXvGEx2Jk/be1c2d9f260de24dde240e3aa4eb0845/introducing-pridox.webp?w=1200&q=75"
            alt={post.postId.toString()}
            title={post.title}
            width={288}
            height={165}
            className="aspect-video w-32 rounded-xl duration-200 md:w-44 lg:w-40 xl:w-64 2xl:w-72"
            priority
            placeholder="blur"
            blurDataURL={post.cover_picture || base64}
          />
          <div className="flex flex-col pt-1 lg:pt-2">
            <h2
              title={post.title}
              className={[
                "mr-1 line-clamp-2 text-sm font-semibold text-gray-900 duration-200 group-hover:text-violet-500 dark:text-gray-100 dark:hover:text-violet-500 md:text-sm lg:line-clamp-1 lg:text-sm xl:text-base",
              ].join(" ")}
            >
              {post.title}
            </h2>
            <p
              className={[
                "mt-1 line-clamp-1 text-xs text-gray-500 duration-200 dark:text-gray-400 md:hidden lg:line-clamp-2 xl:text-sm",
              ].join(" ")}
            >
              {post.short_description}
            </p>
            <div className="mt-auto hidden w-full flex-row gap-3 rounded-xl bg-zinc-100 px-2.5 py-2 duration-200 dark:bg-zinc-700 xl:flex">
              <div className="w-10">
                <Avatar />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-xs font-bold text-gray-900 duration-200 dark:text-gray-50 lg:text-sm">
                  {post.author_username}
                </p>
                <p className="text-xs text-gray-700 duration-200 dark:text-gray-300 lg:text-sm">
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
      break;
  }
};
