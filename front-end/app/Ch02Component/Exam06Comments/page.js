export default function Exam06Comments() {
  // JavaScript 영역에서는 한 줄 주석을 사용할 수 있습니다.
  /* 여러 줄에 걸친 설명은
     이와 같이 작성합니다. */
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam06Comments</h2>
      </header>
      <div //React에서는 class가 아니고 classNAme으로 css클래스를 지정
      className="space-y-5 p-5">
        {/* JSX 내부의 주석은 화면에 표시되지 않습니다. */}
        <p>JSX 안에서는 중괄호 안에 주석을 작성합니다.</p>
        <pre className="overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
          <code>{"{/* JSX 주석 */}"}</code>
        </pre>
        {/* <p>주석으로 감싼 JSX 요소는 화면에 표시되지 않습니다.</p> */}
      </div>
    </section>
  );
}
