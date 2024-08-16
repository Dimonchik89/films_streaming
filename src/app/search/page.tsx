import { Container, Layout } from "@/components";
import { SearchContainer } from "../../components/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest movies",
  description: "All latest movies",
};

const page = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams;
  // https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
  // https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1

  return (
    <Layout>
      <Container>
        <SearchContainer query={query} />
      </Container>
    </Layout>
  );
};

export default page;
