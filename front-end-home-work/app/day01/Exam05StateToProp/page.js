"use client";
import ChildComponent from "./ChildComponent";
import {useState} from "react";

export default function Exam05StateToProp() {
  const [imgFile, setImgFile] = useState("photo1.jpg");

  const changeImgFile = ()=>{
    if(imgFile === "photo1.jpg"){
      setImgFile("photo2.jpg");
    }else if(imgFile === "photo2.jpg"){
      setImgFile("photo1.jpg")
    }
  };
  return (
    <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-100 bg-white text-zinc-900 shadow-xl shadow-indigo-900/5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 bg-indigo-50/50 px-6 py-5">
        <h1 className="text-lg font-bold tracking-tight">Exam05StateToProp</h1>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-100">
          DAY 01 · STATE TO PROP
        </span>
      </header>
      <div className="space-y-4 p-6 sm:p-10">
        <ChildComponent imgFile={imgFile} changeImgFile={changeImgFile}/>
       
      </div>
    </section>
  );
}
