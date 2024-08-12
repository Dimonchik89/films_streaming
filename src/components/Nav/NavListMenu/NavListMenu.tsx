"use client";

import { Genre } from "@/types/genre";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  basePath: string;
  subMenu: Genre[];
}

const NavListMenu: React.FC<Props> = ({ label, basePath, subMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = subMenu?.map(({ id, name }) => (
    <li key={id} className="!border-none !outline-none hover:!outline-none">
      <Link
        className="mb-1 text-gray-800 dark:text-white hover:text-blue-200 dark:hover:text-blue-200"
        href={`${basePath}/${id}`}
      >
        {name}
      </Link>
    </li>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography href="#" variant="small" className="font-normal">
            <MenuItem className="items-center gap-2 font-medium text-blue-gray-900 flex lg:rounded-full text-black-800 font-bold text-md dark:text-white">
              {label}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] overflow-visible lg:grid bd-white dark:bg-black-800 border-none">
          <ul className="grid grid-cols-4 gap-3 !border-none !outline-none hover:!outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default NavListMenu;
