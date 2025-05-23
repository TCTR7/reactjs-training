import React from "react";
import Transciption from "./Transciption";
import Translation from "./Translation";

export default function Information() {
  const [tab, setTab] = React.useState("transcription");

  function getTranscriptionClass() {
    return tab === "transcription"
      ? "bg-blue-400 text-white"
      : "text-blue-400";
  }
  function getTranslationClass() {
    return tab === "translation"
      ? "bg-blue-400 text-white"
      : "text-blue-400";
  }
  function getInfomationContent() {
    if (tab === "transcription") {
      return <Transciption />;
    } else {
      return <Translation />;
    }
  }
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center pb-20 gap-2 sm:gap-4 md:gap-6 duration-500 mt-16 w-fit mx-auto max-w-prose">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-blue-400 bold">Transcription</span>
      </h1>
      <div className="w-full max-w-sm mx-auto bg-white rounded-full overflow-hidden shadow">
        <div className="grid grid-cols-2">
          <button
            className={
              "w-full font-medium py-2 px-4 cursor-pointer transition " +
              getTranscriptionClass()
            }
            onClick={() => setTab("transcription")}
          >
            Transcription
          </button>
          <button
            className={
              "w-full font-medium py-2 px-4 cursor-pointer transition " +
              getTranslationClass()
            }
            onClick={() => setTab("translation")}
          >
            Translation
          </button>
        </div>
      </div>
      {getInfomationContent()}
    </div>
  );
}
