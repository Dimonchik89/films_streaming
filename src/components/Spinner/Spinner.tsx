import React from "react";

interface Props {
  isLoading: boolean;
}

const Spinner: React.FC<Props> = ({ isLoading }) => {
  return <div className={`loader ${isLoading ? "block" : "hidden"}`}></div>;
};

export default Spinner;
