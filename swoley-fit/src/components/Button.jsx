import React from 'react'

export default function Button({text, callbackFunc}) {
  return (
    <button onClick={callbackFunc} className='mx-auto px-8 py-4 rounded-md border-[2px] border-solid border-blue-400 bg-slate-950 blueShadow duration-200'>
        <p>{text}</p>
    </button>
  )
}
