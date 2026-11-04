"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useState } from "react";

export default function LoginComponent() {
    const authContext = useContext(AuthContext);
    const [loginForm, setLoginForm] = useState({
        memberId: "",
        password: "",
    });

    const handleChange = (event) => {
        // let target = event.target;

        // if (target.name === "memberId") {
        //     setLoginForm({ ...loginForm, memberId: target.value })
        // } else if (target.name === "password") {
        //     setLoginForm({ ...loginForm, password: target.value })
        // }

        //[target.name] 동적속성이름
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {
        // 로그인 처리
        // 백엔드연결을 안해서 안함
        // 전역 상태와 localStorage에 로그인 정보를 저장합니다.
        authContext.login(loginForm.memberId, "xxx.xxxx.xxxxx");
    }

    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">LoginComponent</h2>
        </header>
        <div className="space-y-5 p-5">
            <div className="max-w-sm space-y-4">
                <div className="space-y-2">
                    <label htmlFor="memberId" className="block text-sm font-medium text-gray-700">아이디</label>
                    <input
                        value={loginForm.memberId}
                        onChange={handleChange}
                        name="memberId"
                        type="text"
                        autoComplete="username"
                        placeholder="아이디를 입력하세요"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
                    <input
                        value={loginForm.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="비밀번호를 입력하세요"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                    />
                </div>
                <div className="flex gap-2 pt-2">
                    <button onClick={handleSubmit} type="button" className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                        로그인
                    </button>
                    <button type="reset" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                        취소
                    </button>
                </div>
            </div>
        </div>
    </section>
}
