const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="flex justify-center">
      <iframe
        src={`${process.env.NEXT_PUBLIC_MOVIE_URL}movie?tmdb=${id}`}
        width={640}
        height={480}
        // frameborder="0"
        allowFullScreen={true}
        // style="height: 100%; width: 100%;"
      ></iframe>
    </div>
  );
};

export default page;
