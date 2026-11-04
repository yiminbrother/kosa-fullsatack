import Link from "next/link";

export default function Exam01() {
    
    return (
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
            <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
                <h2 className="text-lg font-semibold">Exam01</h2>
            </header>
            <div className="space-y-5 p-5">
                <Link href="Exam01/QueryStringComponent?key1=helloworld&key2=빨강&파랑">쿼리스트링넘기기</Link>
            </div>
        </section>
    );
}
