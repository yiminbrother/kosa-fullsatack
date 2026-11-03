export default function ChildComponentA() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">ChildComponentA</h2>
      </header>
      <div className="p-5">
        <p>ChildComponentA 자식 컴포넌트입니다.</p>
      </div>
    </section>
  );
}
