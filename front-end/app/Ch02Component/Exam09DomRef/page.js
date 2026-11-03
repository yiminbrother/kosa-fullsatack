"use client"
import {useRef} from "react";

export default function Exam09DomRef() {
  const inputRef = useRef(null); 

  const handleKeyDown = () => {
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.style.color = "white";
    const inputRef2 = document.querySelector("input[name=message]");
    console.log(inputRef2.value);
  };
  
  const handleClick = ()=>{
    console.log(inputRef.current.value)
  }
  const focusOut = ()=>{
      inputRef.current.style.backgroundColor = "white";
    inputRef.current.style.color = "black";
  }

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam09DomRef</h2>
      </header>
      <div className="space-y-5 p-5">
        <div className="space-y-2">
          <label htmlFor="dom-ref-text" className="block text-sm font-medium text-gray-700">
            텍스트 입력
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              ref={inputRef}
              onKeyDown={handleKeyDown}
              onBlur={focusOut}
              name="message"
              type="text"
              placeholder="텍스트를 입력하세요"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <button
              onClick={handleClick}
              type="button"
              className="shrink-0 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
