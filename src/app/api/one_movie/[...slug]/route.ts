import { NextRequest, NextResponse } from "next/server";
import { fetchData } from "../../../../service/api";
import { ResponseData } from "../../../../types/response";
import { Movie, MovieDetails } from "../../../../types/movie";
import { SeriesDetails } from "../../../../types/series";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const normalizePath = pathname.split("/").splice(3).join("/");

  console.log("normalizePath", normalizePath);

  try {
    const data = await fetchData<MovieDetails | SeriesDetails>(
      `${normalizePath}`
    );
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
