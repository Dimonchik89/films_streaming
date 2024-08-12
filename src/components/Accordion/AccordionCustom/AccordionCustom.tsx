"use client";

import { Genre } from "@/types/genre";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import { AccordionCustomItem } from "../..";

function Icon({ id, open }: { id: any; open: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

interface Props {
  title: string;
  subMenu: Genre[];
  basePath: string;
}

const AccordionCustom: React.FC<Props> = ({ title, subMenu, basePath }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>{title}</AccordionHeader>
        <AccordionBody>
          <div className="flex flex-col gap-1">
            {subMenu?.map((el) => (
              <AccordionCustomItem key={el.id} el={el} basePath={basePath} />
            ))}
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default AccordionCustom;
