"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Exam02QueryString() {
    const [key1, setkey1] = useState("value1");
    const [key2, setkey2] = useState("value2");
    const router = useRouter();

    const handleClick = ()=>{
        router.push(`Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`)
    };

    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">Exam02QueryString</h2>
        </header>
        <div className="flex flex-wrap gap-3 p-5">
            <Link
                href={`/Ch05Routing/Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`}
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-800"
            >
                이동
            </Link>
            <Link
                href={`Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`}
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-800"
            >
                ComponentA
            </Link>
            <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-800"
            >
                버튼 1
            </button>
            <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-800"
            >
                버튼 2
            </button>
        </div>
    </section>
}
