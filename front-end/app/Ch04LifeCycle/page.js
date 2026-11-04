"use client"

import { useState, useEffect } from "react";

export default function Ch04LifeCycle() {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(101);

    useEffect(() => {// 이걸 Hook(useState,useRef, useContext등)이라고 말함 
        console.log("마운트 상태/ count1때문에 업데이트후 실행"+count1);
        return () => {
            console.log("언마운트상태/ count1때문에 업데이트전 실행"+count1);
        }
    },[count1,count2]);


    // useEffect(() => {// 이걸 Hook(useState,useRef, useContext등)이라고 말함 
    //     console.log("마운트 상태");
    //     return () => {
    //         console.log("언마운트상태");
    //     }
    // },[]); //2번째 파라미터에 []빈배열을 주면 마운트/언마운트일때 만 실행 업데이트(상태변화)때는 실행 x

    // useEffect(() => {// 이걸 Hook(useState,useRef, useContext등)이라고 말함 
    //     console.log("마운트 상태/ 업데이트 후 상태");
    //     return () => {
    //         console.log("언마운트상태/ 업데이트 전상태");
    //     }
    // },);



    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">Ch04LifeCycle</h2>
        </header>
        <div className="space-y-5 p-5">
            <p>{count1}</p>
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95 active:bg-blue-800"
                onClick={() => setCount1(cuurentCount => cuurentCount + 1)}
            >
                증가
            </button>
            <p>{count2}</p>
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95 active:bg-blue-800"
                onClick={() => setCount2(cuurentCount => cuurentCount + 1)}
            >
                증가
            </button>
        </div>
    </section>
}
