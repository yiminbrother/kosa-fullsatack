"use client";

import {useState} from "react";

export default function Exam02PrimitiveTypeState() {
  console.log("랜더링 시작");
  // 상태 정의
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("red");

  const addNubmer = ()=>{
    //상태변경함수를 통해서 상태변경
    changeColor()
    setNumber(number+1)
    
  };

  const minusNumber = ()=>{
    changeColor();
    setNumber(number-1);
  }
  const zeroNumber = ()=>{
    setNumber(0);
  }

  function changeColor(){
    const hue = Math.floor(Math.random() * 360); // 색상: 0~359
    const saturation = Math.floor(Math.random() * 61) + 40; // 채도: 40~100%
    const lightness = Math.floor(Math.random() * 36) + 25; // 밝기: 25~60%
    const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setColor(newColor);
  }
  
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam02PrimitiveTypeState</h2>
      </header>
      <div className="p-5 sm:p-8">
        <div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-100 to-white p-6 sm:p-8">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-black">
              숫자 카운터
            </span>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              버튼을 눌러 숫자를 늘리거나 줄여 보세요.
            </p>
          </div>

          <div className="py-10 text-center">
            <p className="text-xs font-medium tracking-wide text-gray-500">현재 값</p>
            <p  aria-live="polite" aria-atomic="true" className="mt-3 break-all text-6xl font-semibold tracking-tight tabular-nums text-gray-900 sm:text-7xl">
            <span style={{ color: color }}>{number}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-zinc-900"
              onClick={addNubmer}
            >
              <span aria-hidden="true" className="text-xl font-normal">+</span>
              숫자 증가
            </button>
             <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl bg-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-zinc-400"
              onClick={zeroNumber}
            >
              초기화
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-gray-100"
              onClick={minusNumber}
            >
              <span aria-hidden="true" className="text-xl font-normal">−</span>
              숫자 감소
            </button>
           
          </div>
        </div>
        <hr/>
        <hr/>
        
      </div>
     
    </section>
  );
}
