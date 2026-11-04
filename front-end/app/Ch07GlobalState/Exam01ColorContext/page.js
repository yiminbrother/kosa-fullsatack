import UIComponentA from "./UIComponentA";
import UIComponentB from "./UIComponentB";

export default function Exam01ColorContext() {
    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">Exam01ColorContext</h2>
        </header>
        <div className="space-y-5 p-5">
            <UIComponentA />
            <UIComponentB/>
        </div>
    </section>
}
