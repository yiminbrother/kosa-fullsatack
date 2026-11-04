"use client"

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function QueryStringComponent() {


    return (
        <Suspense fallback={<p>쿼리스트링 불러오는중</p>}>
            <ComponentA></ComponentA>
        </Suspense>
    );
}

function ComponentA() {
    const queryString = useSearchParams();
    const key1 = queryString.get("key1");
    const key2 = queryString.get("key2");

    return (

        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
                <h2 className="text-lg font-semibold">QueryStringComponent</h2>
            </header>
            <div className="space-y-5 p-5">
                <div>
                    <p>{key1 ?? "넘어온 문자열없음"}</p>
                    <p>{key2 ?? "넘어온 문자열없음"}</p>
                </div>
            </div>
        </section>

    );
}