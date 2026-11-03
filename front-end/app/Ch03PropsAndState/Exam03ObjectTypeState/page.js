"use client";

import { useState } from "react";

export default function Exam03ObjectTypeState() {
  // 상태정의

  const [state, setState] = useState({
    number: 0,
    color: "red"
  });

  const addNubmer = () => {
    // //상태변경함수를 통해서 상태변경
    // state.number = state.number+1;
    // 방법 1
    //const newState = {number: state.number+1, color : state.color};
    // 방법2
    // const newState = {...state, number:state.number+1};
    // console.log("1:" +state.number);
    // // 아래의 방식은 마지막 setState만 실행 
    //setState({...state, number:state.number+1});
    //setState({...state, number:state.number+1});
    // console.log("2:"+state.number);
    // 2개 동식 실행 
    setState((currentState) =>{
      return {...currentState, number: currentState.number+1}
    });
    
    setState((currentState) =>
      ({...currentState, number: currentState.number+3})
    );
  };

  function changeColor() {
    const hue = Math.floor(Math.random() * 360); // 색상: 0~359
    const saturation = Math.floor(Math.random() * 61) + 40; // 채도: 40~100%
    const lightness = Math.floor(Math.random() * 36) + 25; // 밝기: 25~60%
    const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setState({...state, color:newColor})
  }

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam03ObjectTypeState</h2>
      </header>
      <div className="space-y-6 p-5 sm:p-8">
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
            <p aria-live="polite" aria-atomic="true" className="mt-3 break-all text-6xl font-semibold tracking-tight tabular-nums text-gray-900 sm:text-7xl">
              <span style={{ color: state.color }}>{state.number}</span>
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
              className="flex items-center justify-center gap-3 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-zinc-900"
              onClick={changeColor}
            >
              <span aria-hidden="true" className="text-xl font-normal">+</span>
              색변경
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
