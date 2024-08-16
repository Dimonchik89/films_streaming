import { NextRequest, NextResponse } from "next/server";
import { fetchData } from "../../../service/api";
import { ResponseData } from "../../../types/response";
import { Movie } from "../../../types/movie";

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams.get("query");
  const page = request.nextUrl.searchParams.get("page");
  try {
    const movieResponse = await fetchData<ResponseData<Movie[]>>(
      `search/movie?query=${searchQuery}&page=${page}`
    );
    const tvResponse = await fetchData<ResponseData<Movie[]>>(
      `search/tv?query=${searchQuery}&page=${page}`
    );

    return NextResponse.json([
      { media_type: "movie", ...movieResponse },
      { media_type: "tv", ...tvResponse },
    ]);
  } catch (error) {
    return NextResponse.json(error);
  }
}
