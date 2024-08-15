import React, { Suspense } from "react";
import { Container, Layout, MainContent } from "../../components";

const page = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-5">Movies</div>
        <MainContent lagreMovieContainer={true} media_type="movie" />
      </Container>
    </Layout>
  );
};

export default page;
