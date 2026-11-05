"use client";

import { useEffect, useState } from "react";
import { getBoardList } from "@/apis/reivewApi";

export default function Exam01Board() {

  const [boards, setBoards] = useState([]);
  const [pager, setPager] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const pageButtonClass = "rounded border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40";


  useEffect(() => {

        // 방법1
       const loadBoards = async () => {
      try {
        const response = await getBoardList(pageNo);
        setBoards(response.data.data);
        setPager(response.data.pager);
        console.log("게시물 목록:", response.data);
      } catch (error) {
        console.error("게시물 목록 조회 실패:", error);
      }
    };

    loadBoards();

    // 방법 2
    // getBoardList(pageNo) // promise return 
    //   .then((response) => {
    //     console.log("게시물 목록:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("게시물 목록 조회 실패:", error);
    //   });
  }, [pageNo]);

  return (
    <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white text-zinc-900 shadow-sm">
      <header className="border-b border-zinc-200 bg-zinc-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam01Board</h2>
      </header>
      <div className="p-5">
        <p className="mb-4 font-semibold">상품 후기 게시판</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">상품 후기 게시물 목록</caption>
            <thead className="border-y border-zinc-200 bg-zinc-50">
              <tr>
                {["번호", "제목", "작성자", "작성일", "상품 번호", "첨부파일"].map((label) => (
                  <th key={label} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {boards.map((item) => (
                <tr key={item.boardId} className="border-b border-zinc-200 hover:bg-zinc-50">
                  <td className="px-4 py-3">{item.boardId}</td>
                  <td className="min-w-64 px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.writer}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    {new Date(item.writedAt).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" })}
                  </td>
                  <td className="px-4 py-3">{item.productId}</td>
                  <td className="px-4 py-3">{item.fileName || "—"}</td>
                </tr>
              ))}
              {boards.length === 0 && (
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
            <button type="button" className={pageButtonClass} aria-label="처음 페이지" title="처음 페이지"
              disabled={pager.pageNo === 1} onClick={() => setPageNo(1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5v14M19 6l-6 6 6 6M12 6l-6 6 6 6" />
              </svg>
            </button>
            <button type="button" className={pageButtonClass} aria-label="이전 페이지 그룹" title="이전 페이지 그룹"
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
                  : pageButtonClass}
                onClick={() => setPageNo(page)}>{page}</button>
            ))}
            <button type="button" className={pageButtonClass} aria-label="다음 페이지 그룹" title="다음 페이지 그룹"
              disabled={pager.endPageNo >= pager.totalPageNo}
              onClick={() => setPageNo(pager.endPageNo + 1)}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
            <button type="button" className={pageButtonClass} aria-label="맨끝 페이지" title="맨끝 페이지"
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
            <button type="button" className={pageButtonClass}
              disabled={pager.pageNo <= 1}
              onClick={() => setPageNo(Math.max(1, pager.pageNo - 1))}>이전</button>
            <span aria-live="polite" className="text-sm tabular-nums">
              {pager.pageNo} / {pager.totalPageNo}
            </span>
            <button type="button" className={pageButtonClass}
              disabled={pager.pageNo >= pager.totalPageNo}
              onClick={() => setPageNo(Math.min(pager.totalPageNo, pager.pageNo + 1))}>다음</button>
          </nav>
        )} */}
      </div>
    </section>
  );
}
