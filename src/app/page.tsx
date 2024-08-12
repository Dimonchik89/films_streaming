import { Carousel, Layout } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Page",
  description: "Nev films",
};

export default function Home() {
  return (
    <Layout>
      <Carousel />
    </Layout>
  );
}
