"use client";

import { Input } from "@material-tailwind/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MicrophoneIcon } from "@heroicons/react/24/solid";

interface SearchFormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const FormSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("query") || "");

  // --------- voice search
  // const [startVoiceSearch, setStartVoiceSearch] = useState(false);

  // const commands = {
  //   "say *text": (text: string) => {
  //     console.log("text", text);

  //     setValue(text);
  //     setStartVoiceSearch(false);
  //   },
  // };

  // annyang.addCommands(commands);

  // annyang.addCallback("result", function (phrases: any) {
  //   setValue(phrases[0]);
  //   stop();
  // });

  // function speech() {
  //   annyang.start();
  //   setStartVoiceSearch(true);

  //   setTimeout(() => {
  //     stop();
  //   }, 7000);
  // }

  // function stop() {
  //   annyang.abort();
  //   setStartVoiceSearch(false);
  // }

  // -------------------------

  // -------------------- test voice ---------------------
  const [startVoiceSearch, setStartVoiceSearch] = useState(false);
  const recordRef = useRef<any>(null);

  useEffect(() => {
    if (recordRef.current) {
      recordRef.current.stop();
    }
  }, []);

  function startRecording() {
    setStartVoiceSearch(true);

    recordRef.current = new window.webkitSpeechRecognition();
    recordRef.current.continuos = true;
    recordRef.current.interimResult = true;
    recordRef.current.onresult = (e: any) => {
      const { transcript } = e.results[e.results.length - 1][0];

      setValue(transcript);
      setStartVoiceSearch(false);

      // chageparams(transcript);
    };

    recordRef.current.onend = (e: any) => {
      setStartVoiceSearch(false);
    };

    recordRef.current.start();
  }

  function stopRecording() {
    if (recordRef.current) {
      recordRef.current.stop();
      setStartVoiceSearch(false);
    }
  }

  // -----------------------------------------

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements as SearchFormElements;
    const value = elements?.search.value.trim();
    chageparams(value);
    // const params = new URLSearchParams(searchParams.toString());
    // params.set("media_type", "movie");
    // params.set("query", value);

    // router.push(`/search?${params.toString()}`);
  };

  const chageparams = (value: string) => {
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
              startRecording();
            } else {
              stopRecording();
            }
          }}
        />
        {/* <MicrophoneIcon
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
        /> */}
      </div>
    </form>
  );
};

export default FormSearch;
