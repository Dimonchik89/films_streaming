import Link from "next/link";
import { ButtonTheme, Container } from "..";

const Header = () => {
  return (
    <div className="bg-gray-800 dark:bg-black-800">
      <Container>
        <div className="py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-gray-100 text-sm cursor-pointer">
              пiдписатися
            </h2>
            <Link href="/">
              <h2 className="text-gray-100 text-xl uppercase">Only films</h2>
            </Link>
            <ButtonTheme />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
