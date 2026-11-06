"use client";

import Link from "next/link";
import { useState } from "react";

export default function AppMenu() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`${expanded ? "w-64 p-4" : "w-16 p-2"} shrink-0 border-r border-zinc-200 bg-zinc-100 text-zinc-900 transition-[width,padding] duration-200 motion-reduce:transition-none`}>
      <div className={`mb-3 flex items-center ${expanded ? "justify-between" : "justify-center"}`}>
        {expanded && <span className="px-3 text-xs font-semibold tracking-wider text-zinc-500">메뉴</span>}
        <button type="button" onClick={() => setExpanded(value => !value)}
          aria-expanded={expanded} aria-controls="app-menu-navigation"
          aria-label={expanded ? "메뉴 접기" : "메뉴 펼치기"}
          title={expanded ? "메뉴 접기" : "메뉴 펼치기"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white transition-colors hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16v14H4zM9 5v14" />
            <path d={expanded ? "m15 9-3 3 3 3" : "m13 9 3 3-3 3"} />
          </svg>
        </button>
      </div>
      <nav id="app-menu-navigation" aria-label="메인 메뉴" hidden={!expanded}>
        <Link href="/" className="block rounded px-3 py-2 hover:bg-zinc-200">
          홈
        </Link>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            Ch02Component
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/Ch02Component" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Ch02Component
            </Link>
            <Link href="/Ch02Component/Exam01WrapElement" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam01WrapElement
            </Link>
            <Link href="/Ch02Component/Exam02Expressions" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam02Expressions
            </Link>
            <Link href="/Ch02Component/Exam03Conditon" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam03Conditon
            </Link>
            <Link href="/Ch02Component/Exam04InlineStyle" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam04InlineStyle
            </Link>
            <Link href="/Ch02Component/Exam05ExternalCss" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam05ExternalCss
            </Link>
            <Link href="/Ch02Component/Exam06Comments" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam06Comments
            </Link>
            <Link href="/Ch02Component/Exam07EventHandling" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam07EventHandling
            </Link>
            <Link href="/Ch02Component/Exam08Repeat" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam08Repeat
            </Link>
            <Link href="/Ch02Component/Exam09DomRef" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam09DomRef
            </Link>
            <Link href="/Ch02Component/Exam10NestedLayout/PageComponentA" className="block rounded px-3 py-2 hover:bg-zinc-200">
              PageComponentA
            </Link>
            <Link href="/Ch02Component/Exam10NestedLayout/PageComponentB" className="block rounded px-3 py-2 hover:bg-zinc-200">
              PageComponentB
            </Link>
            <Link href="/Ch02Component/Exam11RuntimeErrorHandling" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam11RuntimeErrorHandling
            </Link>

          </div>
        </details>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            Ch03PropsAndState
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/Ch03PropsAndState" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Ch03PropsAndState
            </Link>
            <Link href="/Ch03PropsAndState/Exam01Props" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam01Props
            </Link>
            <Link href="/Ch03PropsAndState/Exam02PrimitiveTypeState" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam02PrimitiveTypeState
            </Link>
            <Link href="/Ch03PropsAndState/Exam03ObjectTypeState" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam03ObjectTypeState
            </Link>
            <Link href="/Ch03PropsAndState/Exam04FormState" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam04FormState
            </Link>
            <Link href="/Ch03PropsAndState/Exam05StateToProp" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam05StateToProp
            </Link>
          </div>
        </details>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            Ch04LifeCycle
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/Ch04LifeCycle" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Ch04LifeCycle
            </Link>
          </div>
        </details>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            Ch05Routing
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/Ch05Routing/Exam01Navigation" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam01Navigation
            </Link>
            <Link href="/Ch05Routing/Exam02QueryString" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam02QueryString
            </Link>
            <Link href="/Ch05Routing/Exam02QueryString/ComponentA" className="block rounded px-3 py-2 hover:bg-zinc-200">
              ComponentA
            </Link>
          </div>
        </details>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            Ch07GlobalState
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/Ch07GlobalState/Exam01ColorContext" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam01ColorContext
            </Link>
            <Link href="/Ch07GlobalState/Exam02AuthContext" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam02AuthContext
            </Link>
          </div>
        </details>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            Ch08RestAPI
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/Ch08RestAPI/Exam01Review" className="block rounded px-3 py-2 hover:bg-zinc-200">
              Exam01Review
            </Link>
          </div>
        </details>
        <details name="app-menu" className="mt-2">
          <summary className="cursor-pointer rounded px-3 py-2 font-semibold hover:bg-zinc-200">
            test
          </summary>
          <div className="ml-3 border-l border-zinc-300 pl-2">
            <Link href="/test" className="block rounded px-3 py-2 hover:bg-zinc-200">
              test
            </Link>
          </div>
        </details>
      </nav>
    </aside>
  );
}
