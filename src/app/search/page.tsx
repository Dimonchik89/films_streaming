import { Layout } from "@/components";

const page = ({ searchParams }: { searchParams: { query: string } }) => {
  const { query } = searchParams;
  // https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
  // https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1

  return (
    <Layout>
      <h2>Search {query}</h2>
    </Layout>
  );
};

export default page;
