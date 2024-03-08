import blogs from "@/data/blogs.json";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  return NextResponse.json(blogs);
}
