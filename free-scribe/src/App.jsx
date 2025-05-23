import React, { useState, useRef, useEffect } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import FileDisplay from "./components/FileDisplay";
import useRecorder from "./hooks/useRecorder";
import Information from "./components/Information";
import Transcribing from "./components/Transcribing";
import { MessageTypes } from "./utils/preset.js";

function App() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [finished, setFinished] = useState(false);

  const {
    isRecording,
    audioURL,
    startRecording,
    stopRecording,
    handleResetRecorder,
  } = useRecorder();

  let isShowFilePage = file || audioURL;

  const workerRef = useRef(null);

  function handleAudioReset() {
    handleResetRecorder();
    setFile(null);
  }

  function getMainContent() {
    if (output) {
      return <Information />;
    }
    if (loading) {
      return <Transcribing />;
    }
    if (isShowFilePage) {
      return (
        <FileDisplay
          audio={audioURL}
          file={file}
          handleAudioReset={handleAudioReset}
          handleFormSubmission={handleFormSubmission}
        />
      );
    }

    return (
      <Home
        setFile={setFile}
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    );
  }

  async function readAudioFrom(fileOrUrl) {
    const sampling_rate = 16000;
    const audioCTX = new AudioContext({ sampleRate: sampling_rate });

    let audioBlob = fileOrUrl;
    if (typeof fileOrUrl === "string") {
      audioBlob = await fetch(fileOrUrl).then((res) => res.blob());
    }

    const response = await audioBlob.arrayBuffer();
    const decoded = await audioCTX.decodeAudioData(response);
    const audio = decoded.getChannelData(0);
    return audio;
  }

  async function handleFormSubmission() {
    if (!file && !audioURL) {
      return;
    }

    let audio = await readAudioFrom(file ? file : audioURL);
    const model_name = `openai/whisper-tiny.en`;

    workerRef.current.postMessage({
      type: MessageTypes.INFERENCE_REQUEST,
      audio,
      model_name,
    });
  }

  useEffect(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker(
        new URL("./utils/whisper.worker.js", import.meta.url),
        { type: "module" }
      );
    }

    const onMessageReceived = async (e) => {
      switch (e.data.type) {
        case "DOWNLOADING":
          setDownloading(true);
          console.log("DOWNLOADING");
          break;
        case "LOADING":
          setLoading(true);
          console.log("LOADING");
          break;
        case "RESULT":
          setOutput(e.data.results);
          console.log(e.data.results);
          break;
        case "INFERENCE_DONE":
          setFinished(true);
          console.log("DONE");
          break;
      }
    };

    workerRef.current.addEventListener("message", onMessageReceived);

    return () => {
      workerRef.current.removeEventListener("message", onMessageReceived);
      workerRef.current.terminate();
      workerRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col gap-2">
        <Header />
        {getMainContent()}
      </section>
      <footer>fdsfdsafdas</footer>
    </div>
  );
}

export default App;
