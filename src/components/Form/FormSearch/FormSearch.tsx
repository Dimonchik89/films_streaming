"use client";

import { Input } from "@material-tailwind/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SearchFormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

const FormSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("query") || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements as SearchFormElements;
    const value = elements?.search.value.trim();
    const params = new URLSearchParams(searchParams.toString());
    params.set("media_type", "movie");
    params.set("query", value);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-72">
        <Input
          crossOrigin={null}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          color="blue"
          label="Search"
          className="text-black-800 dark:text-white text-md"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default FormSearch;
