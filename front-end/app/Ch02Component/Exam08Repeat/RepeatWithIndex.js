"use client";


export default function RepeatWithIndex() {
  const items = ["눈사람", "얼음", "눈", "바람"];


  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm mt-3">
      <header className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">RepeatWithIndex</h2>
        <span className="shrink-0 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
          총 {items.length}개
        </span>
      </header>
      <div className="space-y-5 p-5">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {
            items.map((item, index)=>
              <li
                key={index}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-4 transition-colors hover:border-sky-200 hover:bg-sky-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-semibold tabular-nums text-sky-700 ring-1 ring-sky-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-gray-800">{item}</span>
              </li>
            )
          }
        </ul>
      </div>
    </section>
  );
}
