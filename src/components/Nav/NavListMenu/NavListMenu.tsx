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
import React from "react";
import { useRouter } from "next/navigation";
import { setCurrentMoviesCategory } from "../../../store/movieCategory/moviesCategory";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../../store/store";
interface Props extends Connector {
  label: string;
  basePath: string;
  subMenu: Genre[];
}

const NavListMenu: React.FC<Props> = ({
  label,
  basePath,
  subMenu,
  setCurrentMoviesCategory,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  if (!subMenu) {
    return <></>;
  }

  const renderItems = subMenu?.map(({ id, name }) => (
    <MenuItem
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
      placeholder={null}
      key={id}
      className="!border-none !outline-none hover:!outline-none"
      onClick={() => {
        setCurrentMoviesCategory(name);
        router.push(`${basePath}/${id}`);
      }}
    >
      <p className="mb-1 text-gray-800 dark:text-white hover:text-blue-200 dark:hover:text-blue-200 capitalize">
        {name}
      </p>
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            href="#"
            variant="small"
            className="font-normal"
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder={null}
          >
            <MenuItem
              className="items-center gap-2 font-medium text-blue-gray-900 flex lg:rounded-full text-black-800 font-bold text-md dark:text-white"
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              placeholder={null}
            >
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
        <MenuList
          className="hidden w-[36rem] overflow-visible lg:grid bd-white dark:bg-black-800 border-none"
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          placeholder={null}
        >
          <ul className="grid grid-cols-4 gap-3 !border-none !outline-none hover:!outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentMoviesCategory: bindActionCreators(
    setCurrentMoviesCategory,
    dispatch
  ),
});

const connector = connect(null, mapDispatchToProps);

type Connector = ConnectedProps<typeof connector>;

export default connector(NavListMenu);
