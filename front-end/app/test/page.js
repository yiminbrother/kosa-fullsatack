"use client"
import ChildComponent from "./ChildComponent";

export default function Test(){
    function handleClick(msg){
        console.log(msg);
    }
    return (
        <div>
            <div>부모 컴포넌트</div>
            <button className=" px-4 py-2"onClick={()=>handleClick("안녕하세요")}>클릭1</button>
            <button className=" px-4 py-2 " onClick={()=>handleClick("안녕하세요")}>클릭2</button>
            <ChildComponent/>
        </div>
    );
}