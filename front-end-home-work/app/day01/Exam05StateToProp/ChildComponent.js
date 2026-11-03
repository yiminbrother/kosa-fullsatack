import Image from "next/image";

export default function ChildComponent({
  imgFile,
  changeImgFile
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-indigo-100 bg-white text-zinc-900 shadow-sm">
      <header className="border-b border-indigo-100 bg-indigo-50/50 px-5 py-3">
        <h2 className="font-semibold">ChildComponent</h2>
      </header>
      <div className="space-y-4 p-5">
        <Image src={`/images/${imgFile}`} width={500} height={200} style={{width: "300px", height:"auto"}} alt=""/>
         <button onClick={changeImgFile}>제출</button>
      </div>
    </section>
  );
}
