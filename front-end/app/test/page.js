"use client";

import { useState } from "react";
import { metadata } from "../layout"

export default function test() {
    const [showCard, setShowCard] = useState(false);
    const [showText, setShowText] = useState(false);
    let [count, plusCount] = useState(0);
    let msg = "hello react";
    let object = {
        "이름": "111",
        "나이": "112",
        "키": "113"
    };


    return (
        <>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setShowText(!showText)}}>클릭</button>
        <p hidden={showText}>보임</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{plusCount(count+1)}}></button>
        <p>{count}</p>
        </>
    );
};