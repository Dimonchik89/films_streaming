// import { Response } from '@/types/response';

import { LANGUAGE } from "@/constants";
import { fetchData } from "@/service/api";
import { Genre } from "@/types/genre";
import { ResponseGenre } from "@/types/response";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = await fetchData<ResponseGenre<Genre[]>>(`${process.env.NEXT_PUBLIC_BASE_URL}genre/movie/list?language=${LANGUAGE}`)
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(error)
    }

}