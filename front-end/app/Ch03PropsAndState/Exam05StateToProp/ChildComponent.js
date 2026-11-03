"use client"

import Image from "next/image";

export default function ChildComponent({
  imgFile,
  changeImg
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h3 className="font-semibold">ChildComponent</h3>
      </header>
      <div className="p-5" aria-live="polite">
        <Image src={`/images/${imgFile}`} height={500} width={300} style={{width:"200px", height:"auto"}} alt=""/>
        <button
          type="button"
          onClick={changeImg}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition duration-200 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500 hover:shadow-lg active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 motion-reduce:transform-none motion-reduce:transition-none"
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 7h-9a4 4 0 0 0-4 4v2a4 4 0 0 1-4 4H2" />
            <path d="m17 4 3 3-3 3M20 17h-5a4 4 0 0 1-4-4v-2a4 4 0 0 0-4-4H2" />
            <path d="m17 14 3 3-3 3" />
          </svg>
          이미지 변경
        </button>
      </div>
    </section>
  );
}
