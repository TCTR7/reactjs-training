import React from "react";

export default function Transcribing(props) {
  const { downloading } = props;
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center pb-20 gap-2 sm:gap-4 md:gap-6 duration-500 mt-16 w-fit mx-auto max-w-full">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        <span className="text-blue-400 bold">Transcribing</span>
      </h1>
      <p className="text-slate-400 bold">{!downloading ? 'warming up cylinders' : "core cylinders"}</p>
      <div className="flex flex-col gap-2 sm:gap-4 w-full max-w-[400px] mx-auto">
        {[0, 1, 2].map((val) => {
            return (
                <div
                    key={val}
                    className={'h-2 sm:h-3 p-1 rounded-full bg-slate-400 loading ' + `loading${val}`}
                >
                </div>
            )
        })}
      </div>
    </div>
  );
}
