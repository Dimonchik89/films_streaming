"use client";

import { Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface SearchFormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

const FormSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements as SearchFormElements;
    const value = elements?.search.value;

    router.push(`/search?query=${value}`);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-72">
        <Input
          color="blue"
          label="Пошук фiльмiв i серiалiв"
          className="text-black-800 dark:text-white text-md"
          name="search"
        />
      </div>
    </form>
  );
};

export default FormSearch;
