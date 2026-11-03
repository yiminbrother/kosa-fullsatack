


export default function Exam04InlineStyle() {

    const style = {
        backgroundColor: "orange",
        color: "white",
        fontSize: "18px"
    };

return (<section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ">
    <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam04InlineStyle</h2>
    </header>
    <div className="space-y-5 p-5">
        <div style={style}>
            인라인 스타일 적용
        </div>
    </div>
</section>);
}

