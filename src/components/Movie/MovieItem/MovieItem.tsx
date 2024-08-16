"use client";

import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { normalizeDate } from "../../../service/helper";

interface Props {
  data: Movie;
  index: number;
  media_type: "movie" | "tv";
}

const MovieItem: React.FC<Props> = ({ data, index, media_type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      className="shadow-md rounded-md pb-2 max-w-[241px]"
    >
      <Link href={`/${media_type}/${data.id}`} key={data.id}>
        <div>
          <div className="image__wrapper">
            <Image
              src={
                data?.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  : "/images/movie-placeholder.png"
              }
              alt={`${data.id}`}
              width={400}
              height={600}
              style={{ objectFit: "cover" }}
            />
            <Image
              src={"/icons/play-circle.svg"}
              alt="play"
              width={50}
              height={50}
              className="card__icon"
            />
          </div>
          <div className="mt-2 flex flex-col px-2 gap-1">
            <span className="dotted__text text-sm font-bold text-blue-200">
              {"title" in data ? data.title : data.name}
            </span>
            <span className="text-xs text-black-800 dark:text-white">
              {"release_date" in data
                ? normalizeDate(data.release_date)
                : normalizeDate(data.first_air_date)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MovieItem;
