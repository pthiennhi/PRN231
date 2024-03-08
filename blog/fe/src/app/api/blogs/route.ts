import blogs from "@/data/blogs.json";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const currentPage = searchParams.get("currentPage")
    ? parseInt(searchParams.get("currentPage") as string)
    : null;
  const pageSize = searchParams.get("pageSize")
    ? parseInt(searchParams.get("pageSize") as string)
    : null;

  if (!currentPage || !pageSize) {
    return NextResponse.json(blogs.slice(0, 3));
  }

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  return NextResponse.json(
    {
      statusCode: 200,
      message: null,
      data: {
        currentPage: currentPage,
        totalPages: Math.ceil(blogs.length / pageSize),
        pageSize: pageSize,
        totalCount: blogs.length,
        hasPrevious: currentPage > 1,
        hasNext: end < blogs.length,
        data: blogs.slice(start, end),
      },
    },
    {
      status: 200,
    },
  );
}
