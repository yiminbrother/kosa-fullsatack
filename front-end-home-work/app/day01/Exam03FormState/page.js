"use client";

import { useState } from "react";

export default function Exam03FormState() {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event)=>{
    let target = event.target;
    if(target.name === "name"){
      console.log("들어옴");
      setState({...state,name:target.value})
    }else if(target.name === "email"){

      setState({...state,email:target.value})
    }
  };

  return (
    <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-100 bg-white text-zinc-900 shadow-xl shadow-indigo-900/5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 bg-indigo-50/50 px-6 py-5">
        <h1 className="text-lg font-bold tracking-tight">Exam03FormState</h1>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-100">
          DAY 01 · FORM STATE
        </span>
      </header>
      <div className="space-y-4 p-6 sm:p-10">
        <div className="p-6 sm:p-10">
          <input type="text" required name="name" onChange={handleChange} />
          <input type="email" required autoComplete="email" onChange={handleChange} name="email"/>
        </div>
        <div className="p-6 sm:p-10"> 
          <p>{state.name}</p>
          <p>{state.email}</p>
        </div>
        
      </div>
    </section>
  );
}
