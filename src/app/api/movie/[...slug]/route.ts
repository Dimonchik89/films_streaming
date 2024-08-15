import { NextRequest, NextResponse } from "next/server";
import { fetchData } from "../../../../service/api";
import { LANGUAGE } from "../../../../constants";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const normalizePath = path.split("/").slice(2).join("/");
  const page = request.nextUrl.searchParams.get("page") || 1;

  try {
    const response = await fetchData(
      `${normalizePath}?language=${LANGUAGE}&page=${page}`
    );
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
