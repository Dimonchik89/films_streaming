"use client";
import { Genre } from "@/types/genre";
import { NavListMenu } from "../../";

interface Props {
  movieGenre: Genre[];
  seriesGenre: Genre[];
}

const NavList: React.FC<Props> = ({ movieGenre, seriesGenre }) => {
  return (
    <ul className="hidden md:mt-2 mb-4 xl:flex gap-2 lg:mb-0 lg:mt-0 flex-row lg:items-center">
      <NavListMenu label={"Movies"} basePath={"/movies"} subMenu={movieGenre} />
      <NavListMenu
        label={"Tv Show"}
        basePath={"/series"}
        subMenu={seriesGenre}
      />
    </ul>
  );
};

export default NavList;
