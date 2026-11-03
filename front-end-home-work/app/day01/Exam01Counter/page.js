"use client";

import {useState} from "react"

export default function Exam01Counter() {
  const [number, setNumber] = useState(0);

  
  const addNumber = ()=>{
    setNumber(number+1);
  };

  const minusNumber = ()=>{
    setNumber(number-1);
  }

  const zeroNumber = ()=>{
    setNumber(0);
  }

  const addNumberFour = ()=>{
    setNumber((number)=>number+1);
    setNumber((number)=>number+3);
    
  }

  return (
    <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-100 bg-white text-zinc-900 shadow-xl shadow-indigo-900/5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 bg-indigo-50/50 px-6 py-5">
        <h1 className="text-lg font-bold tracking-tight">Exam01Counter</h1>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-100">DAY 01 · STATE</span>
      </header>
      <div className="p-6 sm:p-10">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-4 py-12 text-center">
          <p className="text-xs font-semibold tracking-widest text-indigo-500">현재 카운트</p>
          <p aria-live="polite" aria-atomic="true" className="mt-4 break-all text-7xl font-bold tracking-tight text-indigo-950 tabular-nums sm:text-8xl">{number}</p>
          <p className="mt-5 text-sm text-zinc-500">버튼을 눌러 숫자를 바꿔 보세요.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button type="button" onClick={addNumber} className="rounded-2xl bg-indigo-600 px-5 py-4 text-lg font-bold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-500 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 motion-reduce:transition-none">+1</button>
          <button type="button" onClick={addNumberFour} className="rounded-2xl bg-violet-600 px-5 py-4 text-lg font-bold text-white shadow-md shadow-violet-200 transition hover:bg-violet-500 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 motion-reduce:transition-none">+4</button>
          <button type="button" onClick={zeroNumber} className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-zinc-500 transition hover:bg-zinc-50 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 motion-reduce:transition-none">초기화 ↺</button>
          <button type="button" onClick={minusNumber} className="rounded-2xl bg-zinc-100 px-5 py-4 text-lg font-bold text-zinc-700 transition hover:bg-zinc-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 motion-reduce:transition-none">−1</button>
        </div>
      </div>
    </section>
  );
}
