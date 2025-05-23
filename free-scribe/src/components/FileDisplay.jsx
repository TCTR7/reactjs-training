import React from "react";

export default function FileDisplay(props) {
  const { file, audio, handleAudioReset, handleFormSubmission } = props;
  console.log(file);
  return (
    <main className="flex-1 flex flex-col justify-center text-center p-4 pb-20 sm:gap-4 mt-16 gap-3 w-fit mx-auto max-w-full">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold duration-500">
        Your<span className="text-blue-400"> File</span>
      </h1>
      <div className="flex items-center justify-between p-2 mx-auto">
        <p className="font-semibold mx-4">Name</p>
        <p>{file ? file.name : audio}</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <button
          onClick={handleAudioReset}
          className="text-slate-400 font-medium mx-4 cursor-pointer rounded-lg hover:text-blue-600 p-2"
        >
          Reset
        </button>
        <button
          onClick={handleFormSubmission}
          className="text-blue-400 font-medium flex items-center gap-2 rounded-lg bg-white p-2 cursor-pointer"
        >
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  );
}
