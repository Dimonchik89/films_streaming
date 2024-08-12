import {Movie} from '@/types/movie';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: Movie;
}

const MovieItem: React.FC<Props> = ({data}) => {
  return (
    <Link href={`/movie/${data.id}`}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          width={200}
          height={300}
        />
        <h3>{data.title}</h3>
      </div>
    </Link>
  );
};

export default MovieItem;
