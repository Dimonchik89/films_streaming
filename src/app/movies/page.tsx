import React from "react";
import { Container, Layout, MainContent } from "../../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Most popular films",
  description: "Most popular films",
};

const page = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-5">
          <MainContent lagreMovieContainer={true} media_type="movie" />
        </div>
      </Container>
    </Layout>
  );
};

export default page;
