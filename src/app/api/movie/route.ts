import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname;
    const searchParams = request.nextUrl.searchParams.toString();
    const normalizePath = pathname.split("/").slice(2).join("/");

    console.log("normalizePath", normalizePath);
    console.log("searchParams", searchParams);

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
