import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6">
      <Link href="/" className="text-lg font-bold text-indigo-700">React 실습 노트</Link>
      <span className="text-sm text-zinc-500">Props & State</span>
    </header>
  );
}
