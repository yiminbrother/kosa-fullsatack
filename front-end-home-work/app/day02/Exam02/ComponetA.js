"use client"

import { ColorContext } from "@/context/ColorContext";
import { useContext } from "react";


export default function ComponetA() {
    const colorContext = useContext(ColorContext);


    const handleClick = (color) => {
        colorContext.setColor(color);
    }

    return (
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
                <h2 className="text-lg font-semibold">CompoentB</h2>
            </header>
            <div className="space-y-5 p-5">
                <div>
                    <button type="button" onClick={() => handleClick("red")}>빨강</button>
                </div>
                <div>
                    <button type="button" onClick={() => handleClick("blue")} >파랑</button>
                </div>
            </div>
        </section>
    );
}
