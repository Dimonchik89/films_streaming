import Image from "next/image";
import { Container } from "..";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-500">
      <Container>
        <div className="py-5">
          {/* <div className="flex items-center justify-center gap-5">
            <Image
              src={"/images/tmdb.svg"}
              alt="tmdb"
              width={100}
              height={100}
            />
            <p className="text-black-800 dark:text-white font-xl">
              This product uses the TMDb API but is not endorsed or certified by
              TMDb.
            </p>
          </div> */}
          <div className="flex flex-col items-center py-5">
            <h3 className="text-black-800 dark:text-gray-200 font-md">
              ONLY FILMS &copy;
            </h3>
            <p className="mt-3 text-sm text-black-800 dark:text-gray-200">
              The content of this resource is used from third party sources if
              it violates your copyright, please contact us at this address
              dmitriy.k.89.mn@gmail.com to resolve this issue
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
