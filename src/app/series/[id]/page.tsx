import { Container, Layout } from "@/components";
import { CategoryMoviesContainer } from "../../../components/CategoryMovies";

const page = ({ params }: { params: { id: string } }) => {
  // https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28
  const { id } = params;
  return (
    <Layout>
      <Container>
        <CategoryMoviesContainer genreId={id} genre="tv" />
      </Container>
      <div>Movie {id}</div>
    </Layout>
  );
};
export default page;
