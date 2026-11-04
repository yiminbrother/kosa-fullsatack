"use client"

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ComponentA() {
    return (
        <Suspense fallback={<p className="p-5 text-sm text-gray-500">쿼리 문자열을 불러오는 중입니다...</p>}>
            <ComponentAContent />
        </Suspense>
    );
}

function ComponentAContent() {
    const queryString = useSearchParams(); // queryString 받아오기
    // URL이 변경되면 최신 쿼리 문자열을 바로 읽습니다.
    const key1 = queryString.get("key1");
    const key2 = queryString.get("key2");


    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">ComponentA</h2>
        </header>
        <div className="space-y-5 p-5">
            <p>key1: {key1 ?? "전달된 값 없음"}</p>
            <p>key2: {key2 ?? "전달된 값 없음"}</p>
        </div>
    </section>
}
