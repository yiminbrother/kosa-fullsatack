"use client"

import { ColorContext } from "@/context/ColorContext";
import { useContext } from "react";


export default function CompoentB() {
    const colorContext = useContext(ColorContext);
    console.log(colorContext.color);
    return (
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
                <h2 className="text-lg font-semibold">CompoentB</h2>
            </header>
            <div className="space-y-5 p-5">
                <div
                    role="alert"
                    style={{backgroundColor:colorContext.color}}
                    // className={`rounded-lg border border-${colorContext.color}-300 bg-${colorContext.color}-50 px-4 py-3 text-sm text-${colorContext.color}-900`}
                >
                    <p className="font-semibold">주의</p>
                    <p className="mt-1">내용을 확인해 주세요.</p>
                </div>
            </div>
        </section>
    );
}
