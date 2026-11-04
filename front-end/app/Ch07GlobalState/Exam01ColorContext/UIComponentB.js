"use client"

import { ColorContext } from "@/contexts/ColorContext";
import { useContext } from "react";

export default function UiComponentB() {

  //ColorContext 전역 상태를 사용하겠다.
  const colorContext = useContext(ColorContext);
  const colorClasses = {
    black: "border-black bg-[black] text-white",
    red: "border-red-700 bg-[red] text-black",
    orange: "border-orange-700 bg-[orange] text-black",
    yellow: "border-yellow-700 bg-[yellow] text-black",
    green: "border-green-900 bg-[green] text-white",
    blue: "border-blue-900 bg-[blue] text-white",
    indigo: "border-indigo-900 bg-[indigo] text-white",
    violet: "border-violet-700 bg-[violet] text-black",
  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">UiComponentB</h2>
      </header>
      <div className="p-4">
        <div role="alert" className={`rounded border p-4 ${colorClasses[colorContext.color] ?? colorClasses.black}`}>
          경고: 내용을 확인해 주세요.
        </div>
      </div>
    </section>
  );
}
