"use client";

import { Bars2Icon } from "@heroicons/react/24/solid";
import { Navbar } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Container, FormSearch, NavList, Sidebar } from "..";
import { useGetFilmsGenreQuery } from "../../store/api/genresApi";

function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const {
    data: movieGenre,
    isLoading,
    isError,
    error,
  } = useGetFilmsGenreQuery("api/genre/movie");
  const { data: seriesGenre } = useGetFilmsGenreQuery("api/genre/tv");
  const ref = useRef<HTMLDivElement>(null);

  const sidebarContent = [
    {
      title: "Movies",
      basePath: "/movies",
      subMenu: movieGenre?.genres!,
    },
    {
      title: "Tv Show",
      basePath: "/series",
      subMenu: seriesGenre?.genres!,
    },
  ];

  const openDrawer = () => {
    console.log(ref.current);

    document.querySelector("body")?.classList.add("no-scroll");
    setOpen(true);
  };
  const closeDrawer = () => {
    document.querySelector("body")?.classList.remove("no-scroll");
    setOpen(false);
  };

  return (
    <Navbar
      className="mx-auto !max-w-full p-3 lg:pl-6 bg-white dark:bg-gray-500 rounded-none border-none !px-0 relative z-10"
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
      placeholder={null}
    >
      <Container>
        <div className="relative mx-auto flex flex-row items-center justify-between -mx-3">
          <div className="block">
            {!movieGenre || !seriesGenre ? (
              <></>
            ) : (
              <NavList
                movieGenre={movieGenre?.genres!}
                seriesGenre={seriesGenre?.genres!}
              />
            )}

            <Bars2Icon
              className="h-6 w-6 text-black-800 block xl:hidden dark:text-white"
              onClick={() => {
                openDrawer();
              }}
            />
          </div>
          <FormSearch />
        </div>
      </Container>
      <Sidebar
        ref={ref}
        open={open}
        closeDrawer={closeDrawer}
        categories={sidebarContent}
      />
    </Navbar>
  );
}

export default NavbarComponent;
