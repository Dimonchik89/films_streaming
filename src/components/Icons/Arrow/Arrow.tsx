import React from "react";

interface Props {
  fillColor: string;
  width: number;
  height: number;
}

const Arrow: React.FC<Props> = ({ fillColor, width = 15, height = 25 }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="m1 1 7 7-7 7"
        stroke={fillColor}
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
