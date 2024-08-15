import React, { Suspense } from "react";
import { Container, Layout, MainContent } from "../../components";

const page = () => {
  return (
    <Container>
      <div className="mt-5">Movies</div>
      <MainContent lagreMovieContainer={true} />
    </Container>
  );
};

export default page;
