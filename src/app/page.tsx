import {
  Carousel,
  Container,
  Layout,
  MainContent,
  Upcoming,
} from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Page",
  description: "Nev films",
};

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Container>
        <div className="flex mt-6 gap-3">
          <div className="w-full lg:w-2/3">
            <MainContent />
          </div>
          <div className="hidden lg:block w-1/3">
            <Upcoming />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
