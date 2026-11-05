import Link from "next/link";

export default function Exam01ReviewWrite() {
  return (
    <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm">
      <header className="border-b border-zinc-200 bg-zinc-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam01ReviewWrite</h2>
      </header>
      <div className="p-5">
        <p className="mb-4 font-semibold">상품 후기 작성</p>
        <Link href="/Ch08RestAPI/Exam01Review"
          className="inline-block rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100">
          목록으로
        </Link>
      </div>
    </section>
  );
}
