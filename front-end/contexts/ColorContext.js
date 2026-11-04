"use client"

import {createContext, useState } from "react";


// Context 객체 생성
export const ColorContext = createContext(); // 태그 만들기

// 컴포넌트 정의 
export default function ColorContextProvidar({children}){
    
    // 상태정의 
    const [color, setColor] = useState("black");
 
    // 전역 상태 객체 
    const value = {
        // color : color,
        // setColor : setColor
        color,
        setColor
    };

    return (
        // children에 포함되는 모든 컴포넌트는 value 객체를 사용할 수 있다.
        // ColorContext 전역 상태를 모든 컴포넌트에게 제공 
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
}