"use client";

import { LANGUAGE } from "@/constants";
import { fetchData, fetchLocalData } from "@/service/api";
import { Genre } from "@/types/genre";
import { ResponseGenre } from "@/types/response";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Navbar } from "@material-tailwind/react";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { Container, FormSearch, NavList, Sidebar } from "..";

function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const {
    "0": { data: movieGenre, isLoading, isError },
    "1": { data: seriesGenre },
  } = useQueries({
    queries: [
      {
        queryKey: ["movie", "genres"],
        queryFn: () =>
          // fetchData<ResponseGenre<Genre[]>>(
          //   `${process.env.NEXT_PUBLIC_BASE_URL}genre/movie/list?language=${LANGUAGE}`
          // ),
          fetchLocalData<ResponseGenre<Genre[]>>(
            `${process.env.NEXT_PUBLIC_LOCAL_URL}/api/genre/movie`
          ),
      },
      {
        queryKey: ["serials", "genres"],
        queryFn: () =>
          fetchData<ResponseGenre<Genre[]>>(
            `${process.env.NEXT_PUBLIC_BASE_URL}genre/tv/list?language=${LANGUAGE}`
          ),
      },
    ],
  });

  const sidebarContent = [
    {
      title: "Фiльми",
      basePath: "/movies",
      subMenu: movieGenre?.genres!,
    },
    {
      title: "Серiали",
      basePath: "/series",
      subMenu: seriesGenre?.genres!,
    },
  ];

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Navbar className="mx-auto !max-w-full p-3 lg:pl-6 bg-white dark:bg-gray-500 rounded-none border-none !px-0">
      <Container>
        <div className="relative mx-auto flex flex-row items-center justify-between -mx-3">
          <div className="block">
            <NavList
              movieGenre={movieGenre?.genres!}
              seriesGenre={seriesGenre?.genres!}
            />
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
        open={open}
        closeDrawer={closeDrawer}
        categories={sidebarContent}
      />
    </Navbar>
  );
}

export default NavbarComponent;
