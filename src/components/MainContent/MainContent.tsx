import React, { Suspense } from "react";
import { Container, Movie } from "..";

const MainContent = () => {
  return (
    <Suspense>
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
    </Suspense>
  );
};

export default MainContent;
