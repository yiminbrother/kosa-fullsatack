"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Exam02AuthContext() {
    const router = useRouter();
    const authContext = useContext(AuthContext);


    const handleAuthClick = () => {
        if (authContext.memberId) {
            authContext.logout();
        }

        router.push("/Ch07GlobalState/Exam02AuthContext/LoginComponent");
    };

    return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">Exam02AuthContext</h2>
        </header>
        <div className="space-y-5 p-5">
            <button
                type="button"
                onClick={handleAuthClick}
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-800"
            >
                {authContext.memberId ? "로그아웃" : "로그인"}
            </button>
        </div>
    </section>
    );
}
