import React from "react";
import { Container, Movie, MovieList } from "..";

const MainContent = () => {
  return (
    <div className="mt-6">
      <Container>
        <div className="flex">
          <div className="w-full lg:w-2/3">
            <Movie />
          </div>
          <div className="hidden lg:block w-1/3">Upcoming</div>
        </div>
      </Container>
    </div>
  );
};

export default MainContent;
