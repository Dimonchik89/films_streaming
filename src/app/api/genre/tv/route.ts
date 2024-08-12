import { NextResponse } from "next/server";
import { ResponseGenre } from "@/types/response";
import { fetchData } from "@/service/api";
import { Genre } from "@/types/genre";
import { LANGUAGE } from "@/constants";

export async function GET() {
  try {
    const response = await fetchData<ResponseGenre<Genre[]>>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/genre/tv/list?language=${LANGUAGE}`
    );
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
