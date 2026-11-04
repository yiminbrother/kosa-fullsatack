"use client"

import { redirect, useRouter } from "next/navigation";



export default function Exam01Navigation() {
    // Router 얻기
    const router = useRouter();

    const handleClick = () => {
        // 코드상에서 어떤 조건이 될 경우, 자동 이동
        // 로그인 처리후 자동이동 
        // 회원가입 처리 후 자동이동 
        // 서버 컴포넌트는 useRouter사용불가 
        //redirect("/"); 
        
        // 특정 경로로 이동을 할경우(일반적인 경우)
        router.push("/Ch02Component");
    };
    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">Exam01Navigation</h2>
        </header>
        <div className="space-y-5 p-5">
            <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-800"
            >
                이동
            </button>
        </div>
    </section>
}
