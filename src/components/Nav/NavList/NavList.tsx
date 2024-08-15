"use client";
import { Genre } from "@/types/genre";
import { NavListMenu } from "../../";
import { SidebarType } from "../../../types/sidebar";

interface Props {
  sidebarContent: SidebarType<Genre[]>[];
}

const NavList: React.FC<Props> = ({ sidebarContent }) => {
  const content = sidebarContent?.map((item) => (
    <NavListMenu
      key={item.basePath}
      label={item.title}
      basePath={item.basePath}
      subMenu={item.subMenu}
    />
  ));

  return (
    <ul className="hidden md:mt-2 mb-4 xl:flex gap-2 lg:mb-0 lg:mt-0 flex-row lg:items-center">
      {content}
    </ul>
  );
};

export default NavList;
