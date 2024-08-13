import React from "react";

interface Props {
  isLoading: boolean;
}

const Spinner: React.FC<Props> = ({ isLoading }) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`loader ${isLoading ? "block" : "hidden"}`}></div>
    </div>
  );
};

export default Spinner;
