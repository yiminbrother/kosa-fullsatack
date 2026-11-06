"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function AppHeader() {
    const router = useRouter();
    const authContext = useContext(AuthContext);

    const handleClick = () => {
        if (authContext.memberId) {
            authContext.logout();
        } else {
            router.push("/Ch07GlobalState/Exam02AuthContext/LoginComponent");
        }
    };
    return (
        <header className="relative flex min-h-20 items-center gap-4 border-b border-zinc-200 bg-white px-4 py-4 text-zinc-900 shadow-sm sm:px-6 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 dark:border-sky-900 dark:bg-sky-950">
            <Image src="/logo512.png" alt="React 로고" width={30} height={30} />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">React <span className="font-normal text-zinc-400">Workspace</span></p>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">컴포넌트부터 API까지, 하나씩 배우는 공간</p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-3">
          {authContext.isInitialized ? (
          <>
          {authContext.memberId && (
            <span className="hidden max-w-40 truncate text-sm text-zinc-500 sm:block dark:text-zinc-400">
              <span className="font-semibold text-zinc-700 dark:text-zinc-200">{authContext.memberId}</span>님
            </span>
          )}
          <button
            type="button"
            onClick={handleClick}
            className="rounded-xl border border-zinc-200 bg-zinc-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-zinc-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            
            {authContext.memberId ? "로그아웃" : "로그인"}
          </button>
          </>
          ) : (
            <span aria-hidden="true" className="h-9 w-20 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
          )}
          </div>
        </header>
    );
}
