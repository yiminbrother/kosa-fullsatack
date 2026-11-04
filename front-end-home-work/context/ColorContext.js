"use client"

import { createContext, useState } from "react";


export const ColorContext = createContext();

export default function ColorContextProvidar({children}){
    

    const [color, setColor] = useState("black");

    const colors = {
        color,
        setColor
    }

    return(
        <ColorContext.Provider value={colors}>
            {children}
        </ColorContext.Provider>
    );
}

