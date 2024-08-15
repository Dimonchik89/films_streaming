import { Container, Layout, SingleMovie } from "@/components";

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
