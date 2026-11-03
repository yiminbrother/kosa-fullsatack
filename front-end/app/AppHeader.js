"use client"

import Image from "next/image";

export default function AppHeader() {
    return (
        <div className="flex items-center gap-2 bg-black px-4 py-1 text-white">
          <Image src="/logo512.png" alt="React 로고" width={28} height={28} />
          React 
          <button
            type="button"
            className="ml-auto rounded bg-green-600 px-[0.7rem] py-[0.35rem] text-[0.7rem] leading-[1.05rem] text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            로그인
          </button>
        </div>
    );
}