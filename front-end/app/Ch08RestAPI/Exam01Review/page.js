"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getReviewList } from "@/apis/reivewApi";

export default function Exam01Review() {

  const [reviews, setReviews] = useState([]);
  const [pager, setPager] = useState(null);
  const [pageNo, setPageNo] = useState(1);


  useEffect(() => {

        // 방법1
       const loadReviews = async () => {
      try {
        const response = await getReviewList(pageNo);
        setReviews(response.data.data);
        setPager(response.data.pager);
        console.log("후기 목록:", response.data);
      } catch (error) {
        console.error("후기 목록 조회 실패:", error);
      }
    };

    loadReviews();

    // 방법 2
    // getReviewList(pageNo) // promise return 
    //   .then((response) => {
    //     console.log("게시물 목록:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("게시물 목록 조회 실패:", error);
    //   });
  }, [pageNo]);

  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm">
      <header className="border-b border-zinc-200 bg-zinc-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam01Review</h2>
      </header>
      <div className="min-w-0 p-3 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="font-semibold">상품 후기 게시판</p>
          <Link href="/Ch08RestAPI/Exam01ReviewWrite"
            className="shrink-0 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            글쓰기
          </Link>
        </div>
        <div className="w-full max-w-full overflow-x-auto overscroll-x-contain rounded-lg border border-zinc-200"
          role="region" aria-label="상품 후기 목록, 좁은 화면에서는 좌우로 스크롤할 수 있습니다" tabIndex={0}>
          <table className="mx-auto w-[900px] min-w-[900px] text-left text-xs sm:text-sm">
            <caption className="sr-only">상품 후기 게시물 목록</caption>
            <thead className="border-y border-zinc-200 bg-zinc-50">
              <tr>
                {["번호", "제목", "작성자", "작성일", "상품 번호", "첨부파일"].map((label) => (
                  <th key={label} scope="col"
                    className={`${label === "제목" ? "w-full" : "w-px"} whitespace-nowrap px-4 py-3 font-semibold`}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reviews.map((item) => (
                <tr key={item.reviewId} className="border-b border-zinc-200 hover:bg-zinc-50">
                  <td className="w-px whitespace-nowrap px-4 py-3">{item.reviewId}</td>
                  <td className="w-full px-4 py-3 break-words" title={item.title}>
                    {Array.from(item.title).length > 25
                      ? `${Array.from(item.title).slice(0, 25).join("")}....`
                      : item.title}
                  </td>
                  <td className="w-px whitespace-nowrap px-4 py-3">{item.writer}</td>
                  <td className="w-px whitespace-nowrap px-4 py-3">
                    {new Date(item.writedAt).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" })}
                  </td>
                  <td className="w-px whitespace-nowrap px-4 py-3">{item.productId}</td>
                  <td className="w-px whitespace-nowrap px-4 py-3" title={item.fileName || undefined}>{item.fileName || "—"}</td>
                </tr>
              ))}
              {reviews.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-zinc-500">표시할 게시물이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* 기존 방식: 페이지 번호 목록을 표시하고 이전·다음 버튼으로 페이지 그룹을 이동합니다.*/}
        {pager && pager.totalPageNo > 0 && (
          <nav aria-label="게시물 페이지 이동" className="mt-5 flex flex-wrap justify-center gap-1">
            <button type="button" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40" aria-label="처음 페이지" title="처음 페이지"
              disabled={pager.pageNo === 1} onClick={() => setPageNo(1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5v14M19 6l-6 6 6 6M12 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40" aria-label="이전 페이지 그룹" title="이전 페이지 그룹"
              disabled={pager.startPageNo === 1}
              onClick={() => setPageNo(pager.startPageNo - 1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 6-6 6 6 6" />
              </svg>
            </button>
            {pager.pageArray.map((page) => (
              <button key={page} type="button"
                aria-current={page === pager.pageNo ? "page" : undefined}
                className={page === pager.pageNo
                  ? "rounded border border-orange-600 bg-orange-600 px-3 py-2 text-sm font-semibold text-white"
                  : "rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"}
                onClick={() => setPageNo(page)}>{page}</button>
            ))}
            <button type="button" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40" aria-label="다음 페이지 그룹" title="다음 페이지 그룹"
              disabled={pager.endPageNo >= pager.totalPageNo}
              onClick={() => setPageNo(pager.endPageNo + 1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
            <button type="button" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40" aria-label="맨끝 페이지" title="맨끝 페이지"
              disabled={pager.pageNo === pager.totalPageNo}
              onClick={() => setPageNo(pager.totalPageNo)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 5v14M5 6l6 6-6 6M12 6l6 6-6 6" />
              </svg>
            </button>
          </nav>
        )}
        

        {/* 새 방식: pager의 현재/전체 페이지를 표시하고 한 페이지씩 이동합니다. */}
        {/* {pager && pager.totalPageNo > 0 && (
          <nav aria-label="게시물 페이지 이동" className="mt-5 flex items-center justify-center gap-3">
            <button type="button" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={pager.pageNo <= 1}
              onClick={() => setPageNo(Math.max(1, pager.pageNo - 1))}>이전</button>
            <span aria-live="polite" className="text-sm tabular-nums">
              {pager.pageNo} / {pager.totalPageNo}
            </span>
            <button type="button" className="rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
              disabled={pager.pageNo >= pager.totalPageNo}
              onClick={() => setPageNo(Math.min(pager.totalPageNo, pager.pageNo + 1))}>다음</button>
          </nav>
        )} */}
      </div>
    </section>
  );
}
