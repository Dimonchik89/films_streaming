"use client";

import { Genre } from "@/types/genre";
import { SidebarType } from "@/types/sidebar";
import { Drawer, IconButton } from "@material-tailwind/react";
import React from "react";
import { AccordionCustom } from "..";

interface Props {
  open: boolean;
  closeDrawer: () => void;
  categories: SidebarType<Genre[]>[];
}

const Sidebar: React.FC<Props> = ({ open, closeDrawer, categories = [] }) => {
  const content = categories?.map((item) => (
    <AccordionCustom
      key={item.title}
      title={item.title}
      subMenu={item.subMenu}
      basePath={item.basePath}
    />
  ));

  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
      placeholder={null}
    >
      <div className="bg-white dark:bg-black-800 p-4 min-h-screen">
        <div className="mb-6 flex items-center justify-between">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder={null}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mt-3">{content}</div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
