"use client";
import { getBlogs } from "@/services/getBlogs.service";
import { Blog } from "@/types/blog";
import { Avatar } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoTiktok,
} from "../common/icons/BrandIcon";
import { BlogCard } from "./BlogCard";

export const HomePage = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="mb-10 w-full md:mb-20">
      <section className="my-10 xl:my-20">
        <h1 className="max-w-md text-center text-2xl font-bold !leading-relaxed tracking-tight text-gray-900 drop-shadow-xl duration-200 dark:text-gray-100 lg:max-w-lg lg:text-3xl xl:max-w-xl xl:text-4xl">
          Welcome to my blog!
        </h1>
      </section>
      {posts && (
        <div className="flex w-full flex-col gap-10 md:grid md:grid-cols-2 md:gap-5 lg:gap-6">
          <BlogCard post={posts[0]} />
          <div className="flex h-full flex-col gap-6">
            {posts.slice(1, 4)?.map((post: Blog) => {
              return <BlogCard key={post.postId} post={post} />;
            })}
          </div>
        </div>
      )}

      <div className="shadow-card mt-10 flex w-full max-w-3xl flex-row gap-5 rounded-xl bg-violet-200 p-6 dark:bg-violet-300">
        <div className="flex w-fit min-w-[100px] flex-col items-center gap-3">
          <Avatar />
          <ul className="flex flex-row justify-center gap-3">
            <li title="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/dminhvu02/"
                rel="follow index"
                className="flex flex-row items-center rounded-xl text-gray-900 duration-200 hover:text-violet-500"
                title="LinkedIn"
              >
                <IoLogoLinkedin size={20} />
              </Link>
            </li>
            <li title="GitHub">
              <Link
                href="https://github.com/dminhvu"
                rel="follow index"
                className="flex flex-row items-center rounded-xl text-gray-900 duration-200 hover:text-violet-500"
                title="GitHub"
              >
                <IoLogoGithub size={20} />
              </Link>
            </li>
            <li title="TikTok">
              <Link
                href="https://tiktok.com/@wisecodeteam"
                rel="follow index"
                className="flex flex-row items-center rounded-xl text-gray-900 duration-200 hover:text-violet-500"
                title="TikTok"
              >
                <IoLogoTiktok size={20} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-gray-900">Nhi Pham</p>
          <p className="text-sm italic text-gray-700">Software Engineer</p>
          <p className="mt-2 font-medium text-gray-700">
            Hi guys 👋, I&apos;m a developer specializing in 
            Next.js. My blog shares practical tutorials and
            insights based on 2+ years of hands-on experience. Open to freelance
            opportunities &mdash; let&apos;s{" "}
            <Link
              href="/contact"
              className="text-violet-600 underline duration-200 hover:text-violet-700"
              title="Contact Nhi Pham"
            >
              get in touch
            </Link>
            !
          </p>
        </div>
      </div>
    </main>
  );
};
