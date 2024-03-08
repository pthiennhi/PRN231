import { Blog } from "@/types/blog";

export const getBlogs = async (): Promise<Blog[]> => {
    const response = await fetch("http://localhost:3000/blogs");
    return response.json();
};
