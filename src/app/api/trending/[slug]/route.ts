import { NextRequest, NextResponse } from "next/server";
import { fetchData } from "@/service/api";
import { ResponseData } from "../../../../types/response";
import { Movie } from "../../../../types/movie";
import { LANGUAGE } from "@/constants";

export async function GET(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname.split("/").splice(2).join("/");
    const time = request.nextUrl.searchParams.get("time");
    const response = await fetchData<ResponseData<Movie[]>>(
      `${process.env.NEXT_PUBLIC_BASE_URL}${path}/${time}?language=${LANGUAGE}`
    );
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
