import { Container, Layout, SingleMovie } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest movies",
  description: "All latest movies",
};

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <Layout>
      <Container>
        <SingleMovie id={id} media_type="movie" />
      </Container>
    </Layout>
  );
};

export default page;
