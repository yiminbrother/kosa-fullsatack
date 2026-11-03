"use client";
// 런타임오류만 처리
import Link from "next/link";

export default function Error() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">오류 안내</h2>
      </header>
      <div className="space-y-5 p-5">
        <div role="alert" className="space-y-2 rounded-lg border border-red-100 bg-red-50 p-4">
          <p className="font-semibold text-red-800">페이지를 표시하는 중 오류가 발생했습니다.</p>
          <p className="text-sm leading-6 text-gray-600">
            이용에 불편을 드려 죄송합니다. 잠시 후 다시 시도하거나 홈으로 이동해 주세요.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          홈으로 이동
        </Link>
      </div>
    </section>
  );
}
