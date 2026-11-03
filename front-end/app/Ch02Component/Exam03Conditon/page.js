
export default function Exam03Conditon() {

  // 변수 선언 
  const var1 = "리액트";

  // 반환값

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm ">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam03Conditon</h2>
      </header>
      <div className="p-5">
      <div className="space-y-2">
        {/* if문이 사용불가능해서 삼항연산자로 대체 */}
        <div>{(var1 === "리액트") ? <p>리액트가 맞습니다.</p> : <p>리액트가 아닙니다</p>}</div>    
        {/* &&와 || 연산자로 if문대응*/}
        <div>{(var1 === "리액트") && <p>true</p>}</div> 
        <div>{(var1 !== "리액트") && <p>false</p>}</div>    

        <div>{(var1 === "리액트") || <p>true</p>}</div> 
        <div>{(var1 !== "리액트") || <p>false</p>}</div> 
        
      </div>
    </div>
    </section>
  );
}
