import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { username, password } = res;
  if (username === "admin" && password === "admin") {
    return NextResponse.json(
      {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
      {
        status: 200,
      },
    );
  }
  return NextResponse.json(
    { message: "Invalid username or password" },
    { status: 401 },
  );
}
