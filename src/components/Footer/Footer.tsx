import { Container } from "..";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-500">
      <Container>
        <div className="flex flex-col items-center py-5">
          <h3 className="text-black-800 dark:text-gray-200 font-md">
            ONLY FILMS &copy;
          </h3>
          <p className="mt-3 text-sm text-black-800 dark:text-gray-200">
            The content of this resource is used from third party sources if it
            violates your copyright, please contact us at this address
            test@gmail.com to resolve this issue
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
