"use client";

import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function Exam05StateToProp() {
  const [imgFile, setImgFile] = useState("photo1.jpg");

  const changeImg = ()=>{
    if(imgFile === "photo1.jpg"){
      setImgFile("photo2.jpg")
    }else{
      setImgFile("photo1.jpg")
    }
  }
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam05StateToProp</h2>
      </header>
      <div className="space-y-5 p-5 sm:p-8">
        <ChildComponent imgFile={imgFile} changeImg={changeImg}/>
      </div>
    </section>
  );
}
