"use client";

import { getBlogsWithPagination } from "@/services/getBlogs.service";
import { Blog } from "@/types/blog";
import { Pagination } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BlogCard } from "./home/BlogCard";

const BlogPagination = () => {
  const [page, setPage] = useState(1);

  const { data: allPosts } = useQuery({
    queryKey: ["blogsWithPagination", { currentPage: page, pageSize: 2 }],
    queryFn: getBlogsWithPagination,
  });

  console.log(allPosts);

  return (
    <section className="mt-20 flex w-full flex-col items-center gap-10">
      <div className="grid w-full grid-rows-2 items-center gap-5">
        {allPosts?.data?.data?.map((post: Blog) => (
          <BlogCard key={post.postId} style="other" post={post} />
        ))}
      </div>
      <Pagination
        showControls
        showShadow
        initialPage={page}
        total={allPosts?.data?.totalPages as number}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </section>
  );
};

export default BlogPagination;
