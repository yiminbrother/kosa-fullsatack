import Link from "next/link";

export default function AppAside() {
  return (
    <aside className="w-40 shrink-0 border-r border-zinc-200 bg-zinc-50 p-4 sm:w-60">
      <nav aria-label="실습 메뉴">
        <p className="mb-3 px-3 text-xs font-semibold text-zinc-500">학습 공간</p>
        <Link href="/" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-100 hover:text-indigo-700">홈</Link>
        <details className="mt-3" open>
          <summary className="cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-indigo-100">
            day01
          </summary>
          <div className="ml-3 border-l border-zinc-200 pl-2">
            <Link href="/day01/Exam01Counter" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-100 hover:text-indigo-700">
              Exam01Counter
            </Link>
            <Link href="/day01/Exam02ObjectState" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-100 hover:text-indigo-700">
              Exam02ObjectState
            </Link>
            <Link href="/day01/Exam03FormState" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-100 hover:text-indigo-700">
              Exam03FormState
            </Link>
            <Link href="/day01/Exam04SubmitForm" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-100 hover:text-indigo-700">
              Exam04SubmitForm
            </Link>
            <Link href="/day01/Exam05StateToProp" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-indigo-100 hover:text-indigo-700">
              Exam05StateToProp
            </Link>
          </div>
        </details>
      </nav>
    </aside>
  );
}
