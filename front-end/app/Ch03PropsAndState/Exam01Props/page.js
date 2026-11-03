import ChildCompoenent from "./ChildComponent";
import Image from "next/image";
import photo1 from "@/public/images/photo1.jpg";

export default function Exam01Props() {
    let count = 5;
    return <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ">
        <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
            <h2 className="text-lg font-semibold">Exam01Props</h2>
        </header>
        <div className="space-y-5 p-5">
           
            <ChildCompoenent name="React" version={19} object={["제목","내용","하하"]}>
                <Image src={photo1} alt="사진 1" className="h-auto max-w-full rounded-lg" width={100} height={200}
                style={{"width":"200px", "height":"auto"}} />
            </ChildCompoenent>

            <ChildCompoenent name="React" version={20} object={["제목","내용","하하"]}>
                <Image src={photo1} alt="사진 1" className="h-auto max-w-full rounded-lg" width={100} height={200}
                style={{"width":"200px", "height":"auto"}} />
            </ChildCompoenent>
        </div>
    </section>
}

