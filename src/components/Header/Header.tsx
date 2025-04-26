import Link from "next/link";
import { ButtonTheme, Container } from "..";
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-gray-800 dark:bg-black-800">
      <Container>
        <div className="py-4">
          <div className="flex justify-between items-center">
            {/* <h2 className="text-gray-100 text-sm cursor-pointer w-5">logo</h2> */}
			<Link href="/">
				<Image src="/images/only_films.png" alt='logo' width={35} height={35} className='cursor-pointer'/>
			</Link>

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
