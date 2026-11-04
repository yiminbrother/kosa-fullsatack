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
        <div className="flex items-center gap-2 bg-black px-4 py-1 text-white">
          <Image src="/logo512.png" alt="React 로고" width={28} height={28} />
          React 

          
          {authContext.isInitialized ? (
          <button
            type="button"
            onClick={handleClick}
            className="ml-auto rounded bg-green-600 px-[0.7rem] py-[0.35rem] text-[0.7rem] leading-[1.05rem] text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            
            {authContext.memberId ? "로그아웃" : "로그인"}
          </button>
          ) : (
            <span aria-hidden="true" className="ml-auto h-7 w-16" />
          )}
        </div>
    );
}
