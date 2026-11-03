"use client";

import ChildComponent from "./ChildComponent";

export default function Exam07EventHandling() {

  function handleClick1(event) {
    console.log(event.target.name); // dom가져옴 event
    if(event.target.name === "btn1"){
      console.log("btn1클릭");
    }
  }

  function handleClick3(event, name) {
    console.log(event.target);
    console.log(`${name}을 클릭함`);
  }

  function handleClick4(n) {
    console.log("4번 클릭함");
  }
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">Exam07EventHandling</h2>
      </header>
      <div className="space-y-5 p-5">
        <p>onClick에 이벤트 처리 함수를 전달합니다.</p>
        <div className="flex flex-wrap gap-3">
        <button
          name="btn1"
          type="button"
          onClick={handleClick1}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          버튼1
        </button>
        <button
          
          type="button"
          onClick={()=>{console.log("버튼2를 클릭함")}}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          버튼2
        </button>
            {/* <button
          type="button"
          //이런식으로하면 실행하자마자 실행됨
          onClick={handleClick3("버튼3")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          
          버튼3
        </button> */}
        <button
          type="button"
          onClick={(event)=>handleClick3(event,"버튼3")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          버튼3
        </button>
        </div>
        <hr/> 
        <div onClick={()=>handleClick3("컨테이너")}>
          컨테이너
        </div>
        <hr/>
          {/* 자식컴포넌트는 안됨 dom tag만 가능 */}
          <ChildComponent onClick={handleClick4}/>
        
      </div>
    </section>
  );
}
