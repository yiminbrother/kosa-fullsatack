import Image from "next/image";

function fun(){
  return "fun()에 반환값";
}



export default function Exam02xpressions() {
  const name = "이민형";
  const imageFile = "photo1.jpg";
  const imageHeight = 200;

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam02Expressions</h2>
      </header>
      <div className="p-5">
      <div className="space-y-2">
        <p>표현식</p> 
        <p>{name}</p>
        <p>{1+2}</p>
        <p>{fun()}</p>
        <p>
            <Image src= {`/images/${imageFile}`} width={200} height={imageHeight} alt="이미지 " loading="eager"/>
            <Image src= {"/images/"+imageFile} width={200} height={imageHeight} alt="이미지 "/>
        </p>
        
      </div>
    </div>
    </section>
  );
}
