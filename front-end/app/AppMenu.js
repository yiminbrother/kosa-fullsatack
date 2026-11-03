import Link from "next/link";

export default function AppMenu() {
  return (
    <aside className="w-64 shrink-0 border-r border-zinc-200 bg-zinc-100 p-4 text-zinc-900">
      <nav aria-label="메인 메뉴">
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
