import React from "react";
import { Container, Layout, MainContent } from "../../components";

const page = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-5"></div>
        <MainContent lagreMovieContainer={true} />
      </Container>
    </Layout>
  );
};

export default page;
