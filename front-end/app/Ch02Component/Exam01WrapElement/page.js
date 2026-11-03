
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

export default function Exam01WrapElement() {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam01WrapElement</h2>
      </header>
      <div className="space-y-5 p-5">
      <div className="space-y-2">
          <ChildComponentA />
          <ChildComponentB />
      </div>
    </div>
    </section>
  );
}
