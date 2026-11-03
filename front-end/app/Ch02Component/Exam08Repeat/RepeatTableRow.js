"use client";


export default function RepeatTableRow() {

  const boards = [
    {bno:1, btitle:"제목1", bwriter:"user1", bdate:"2026-11-03", bhitcount:0},
    {bno:2, btitle:"제목2", bwriter:"user2", bdate:"2026-11-03", bhitcount:0},
    {bno:3, btitle:"제목3", bwriter:"user3", bdate:"2026-11-03", bhitcount:0}
  ];

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm mb-3">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">RepeatTableRow</h2>
      </header>
      <div className="space-y-5 p-5">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <caption className="sr-only">게시글 목록</caption>
            <thead className="border-b border-gray-200 bg-gray-50 text-gray-600">
              <tr>
                <th scope="col" className="w-20 px-4 py-3 text-center font-semibold">번호</th>
                <th scope="col" className="px-4 py-3 text-left font-semibold">제목</th>
                <th scope="col" className="w-28 px-4 py-3 text-left font-semibold">작성자</th>
                <th scope="col" className="w-36 px-4 py-3 text-center font-semibold">작성일</th>
                <th scope="col" className="w-24 px-4 py-3 text-right font-semibold">조회수</th>
              </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {boards.map((board)=>
                <tr key={board.bno} className="transition-colors even:bg-gray-50/50 hover:bg-blue-50/60">
                  <td className="px-4 py-4 text-center tabular-nums text-gray-500">{board.bno}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{board.btitle}</td>
                  <td className="px-4 py-4 text-gray-600">{board.bwriter}</td>
                  <td className="whitespace-nowrap px-4 py-4 text-center tabular-nums text-gray-500">{board.bdate}</td>
                  <td className="px-4 py-4 text-right tabular-nums text-gray-500">{board.bhitcount}</td>
                </tr>
            )}
          </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
