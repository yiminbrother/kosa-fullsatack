"use client"

import { ColorContext } from "@/contexts/ColorContext";
import { useContext } from "react"

export default function UIComponentA() {
    //ColorContext 전역 상태를 사용하겠다.
    const colorContext = useContext(ColorContext);

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    const handleClick = (color)=>{
        colorContext.setColor(color);
    };

    return (<section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">UIComponentA</h2>
        </header>
        <div className="space-y-5 p-5 flex justify-between">
            {colors.map((color,index) => (
                <div onClick={()=>handleClick(color)} key={index} style={{background: color, width: "24px", height: "24px", cursor: "pointer"}}>

                </div>
            ))}
            <hr/>
            color 전역 상태: {colorContext.color}
        </div>
    </section>
    );
}
