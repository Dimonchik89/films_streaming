"use client";

import { Input } from "@material-tailwind/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import annyang from "annyang";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

interface SearchFormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

const FormSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("query") || "");

  // --------- voice search
  const [startVoiceSearch, setStartVoiceSearch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
  }, []);

  const commands = {
    "say *text": (text: string) => {
      console.log("text", text);

      setValue(text);
      setStartVoiceSearch(false);
    },
  };

  annyang.addCommands(commands);

  annyang.addCallback("result", function (phrases: any) {
    setValue(phrases[0]);
    stop();
  });

  function speech() {
    annyang.start();
    setStartVoiceSearch(true);

    setTimeout(() => {
      stop();
    }, 7000);
  }

  function stop() {
    annyang.abort();
    setStartVoiceSearch(false);
  }

  // -------------------------

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
      <div className="w-72 flex items-center gap-2">
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
        <MicrophoneIcon
          className={`${
            startVoiceSearch
              ? "text-red-500 microphone_animate"
              : "text-black-800 dark:text-white "
          } w-6 h-6 cursor-pointer`}
          onClick={() => {
            if (!startVoiceSearch) {
              speech();
            } else {
              stop();
            }
          }}
        />
      </div>
    </form>
  );
};

export default FormSearch;
