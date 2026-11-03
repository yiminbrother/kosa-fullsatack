"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const hasNotified = useRef(false);

  useEffect(() => {
    if (hasNotified.current) return;
    hasNotified.current = true;

    window.alert("잘못된 URL입니다. 홈으로 이동합니다.");
    router.replace("/");
  }, [router]);

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">페이지를 찾을 수 없습니다</h2>
      </header>
      <div className="p-5">
        <p>잘못된 URL입니다. 홈으로 이동합니다.</p>
      </div>
    </section>
  );
}
