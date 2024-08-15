import { NextRequest, NextResponse } from "next/server";
import { fetchData } from "../../../../service/api";

export async function GET(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname.split("/").splice(3).join("/");
    const searchParams = request.nextUrl.searchParams.toString();

    const response = await fetchData(`${path}?${searchParams}`);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
