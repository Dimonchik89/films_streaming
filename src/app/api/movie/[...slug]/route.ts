import { NextRequest, NextResponse } from "next/server";
import { fetchData } from "../../../../service/api";
import { LANGUAGE } from "../../../../constants";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const normalizePath = path.split("/").slice(2).join("/");
  console.log("pathname", path.split("/").slice(2).join("/"));
  const page = request.nextUrl.searchParams.get("page") || 1;
  console.log("page", page);

  try {
    const response = await fetchData(
      `${process.env.NEXT_PUBLIC_BASE_URL}${normalizePath}?language=${LANGUAGE}&page=${page}`
    );
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
