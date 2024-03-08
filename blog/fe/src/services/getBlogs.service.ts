import { Blog } from "@/types/blog";
type BlogResponse = {
  statusCode: number;
  message: string | null;
  data: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    hasPrevious: boolean;
    hasNext: boolean;
    data: Blog[];
  };
};
export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch("http://localhost:3000/api/blogs");
  return response.json();
};

export const getBlogsWithPagination = async ({
  queryKey,
}: {
  queryKey: [string, { currentPage: number; pageSize: number }];
}): Promise<BlogResponse> => {
  const [, { currentPage, pageSize }] = queryKey;
  console.log(currentPage, pageSize);
  const response = await fetch(
    `http://localhost:3000/api/blogs?currentPage=${currentPage}&pageSize=${pageSize}`,
  );
  return response.json();
};
