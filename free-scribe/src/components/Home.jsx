import React, { useState, useEffect } from "react";

export default function Home(props) {
  const { setFile, startRecording, stopRecording, isRecording } = props;
  const [duration, setDuration] = useState(0);

  function handleRecording() {
    if (isRecording) {
      stopRecording();
      setDuration(0);
    } else {
      startRecording();
    }
  }

  useEffect(() => {
    if (!isRecording) {
      return;
    }
    const interval = setInterval(() => {
      if (isRecording) {
        setDuration((prevDuration) => prevDuration + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRecording]);

  return (
    <main className="flex-1 flex flex-col justify-center text-center p-4 pb-20 sm:gap-4 mt-16 gap-3">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold duration-500">
        Free<span className="text-blue-400">Scribe</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record <span className="text-blue-400">&#8594;</span> Transcribe{" "}
        <span className="text-blue-400">&#8594;</span> Translate
      </h3>
      <button
        onClick={handleRecording}
        className="flex justify-between items-center bg-white gap-4 mx-auto rounded-lg px-4 py-2 my-4 w-72 max-w-full text-base cursor-pointer"
        type="button"
        aria-label={isRecording ? "Stop Recording" : "Start Recording"}
      >
        <p className="text-blue-400">
          {isRecording ? "Stop Recording" : "Record"}
        </p>
        <div className="flex items-center gap-2">
          {duration > 0 && (
            <p className="text-slate-400 font-medium">{duration}s</p>
          )}
          <i
            className={
              "fa-solid fa-microphone hover:text-blue-600" + (isRecording ? " text-rose-400 hover:text-rose-600" : "")
            }
          ></i>
        </div>
      </button>
      <p className="text-base my-2 md:text-lg">
        Or{" "}
        <label
          htmlFor="file-upload"
          className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200"
        >
          {" "}
          upload
        </label>
        <input
          type="file"
          accept="audio/mp3"
          className="hidden"
          id="file-upload"
          onChange={(e) => {
            const file = e.target.files[0];
            setFile(file);
          }}
        />{" "}
        a mp3 file
      </p>
      <p className="italic text-slate-400">Free now free forever</p>
    </main>
  );
}
