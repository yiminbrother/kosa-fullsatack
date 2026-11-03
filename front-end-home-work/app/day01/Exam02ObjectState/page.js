"use client";
import {useState} from "react";

export default function Exam02ObjectState() {
  const [state, setState] = useState({
    number:0,
    color: "red"
  });

  const addNumber = ()=>{
      setState((state)=>({...state,number:state.number+1}))
  }
  
  const changeColor = ()=>{
    let color = state.color;

    if(color === "red"){
      setState((state)=>({...state,color:"blue"}))
    }else{
      setState((state)=>({...state,color:"red"}))
      
    }
  }

  return (
    <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-100 bg-white text-zinc-900 shadow-xl shadow-indigo-900/5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 bg-indigo-50/50 px-6 py-5">
        <h1 className="text-lg font-bold tracking-tight">Exam02ObjectState</h1>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-100">DAY 01 · OBJECT STATE</span>
      </header>
      <div className="p-6 sm:p-10">
        <div className={`rounded-2xl border px-4 py-12 text-center transition-colors duration-300 motion-reduce:transition-none ${state.color === "red" ? "border-rose-100 bg-gradient-to-br from-rose-50 to-white" : "border-blue-100 bg-gradient-to-br from-blue-50 to-white"}`}>
          <p className="text-xs font-semibold tracking-widest text-zinc-500">현재 카운트</p>
          <p style={{color:state.color}} aria-live="polite" aria-atomic="true" className="mt-4 break-all text-7xl font-bold tracking-tight tabular-nums transition-colors duration-300 motion-reduce:transition-none sm:text-8xl">{state.number}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm">
            <span aria-hidden="true" style={{backgroundColor:state.color}} className="h-2.5 w-2.5 rounded-full" />
            현재 색상 · {state.color === "red" ? "빨강" : "파랑"}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button type="button" onClick={addNumber} className="flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-5 py-4 font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-500 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 motion-reduce:transform-none motion-reduce:transition-none">
            <span aria-hidden="true" className="text-xl">＋</span> 숫자 증가
          </button>
          <button type="button" onClick={changeColor} className="flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-semibold text-zinc-700 transition hover:border-indigo-200 hover:bg-indigo-50 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 motion-reduce:transform-none motion-reduce:transition-none">
            <span aria-hidden="true" className="flex -space-x-1"><span className="h-4 w-4 rounded-full bg-red-500 ring-2 ring-white" /><span className="h-4 w-4 rounded-full bg-blue-500 ring-2 ring-white" /></span>
            색상 변경
          </button>
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-zinc-500">숫자와 색상을 바꾸며 객체 상태의 변화를 확인해 보세요.</p>
      </div>
    </section>
  );
}
