import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface Props {
  error: FetchBaseQueryError | SerializedError;
}

const ErrorComponent: React.FC<Props> = ({ error }) => {
  return (
    <div className="w-full flex item-center justify-center">
      <h2>{"status" in error ? JSON.stringify(error.data) : error.message}</h2>
    </div>
  );
};
export default ErrorComponent;
