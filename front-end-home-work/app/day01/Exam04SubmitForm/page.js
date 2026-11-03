"use client";

import {useState} from "react";

export default function Exam04SubmitForm() {
  const [form, setForm] = useState({
    name : "",
    email : ""
  });

  const [submitted, setSubmitted] = useState(false);

  const changeValue = (event)=>{
    let target = event.target;
    
    if(target.name === "name"){
      console.log(target.value);
      setForm({...form, name:target.value})
    }else if(target.name === "email"){
      console.log(target.value);
      setForm({...form, email:target.value})
    }

  };  

  const submit = (event)=>{
    event.preventDefault();
    if(form.name === "" || form.email === ""){
      alert("이름이나 이메일을 입력해주세요");
      return false;
    }
    setSubmitted(true);

  }

  const init = ()=>{
    setForm({name:"", email:""})
    setSubmitted(false);
  }
  return (
    <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-100 bg-white text-zinc-900 shadow-xl shadow-indigo-900/5">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 bg-indigo-50/50 px-6 py-5">
        <h1 className="text-lg font-bold tracking-tight">Exam04SubmitForm</h1>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-100">
          DAY 01 · SUBMIT FORM
        </span>
      </header>
      <div className="space-y-4 p-6 sm:p-10">
        <h2 className="text-xl font-bold tracking-tight">회원 정보 제출</h2>
        <p className="text-sm leading-6 text-zinc-500">
          이름과 이메일을 입력하고 제출했을 때만 결과가 표시되는 폼을 구현해 보세요.
        </p>
        <div>
            <input type="name"  value={form.name} onChange={changeValue} name="name" required/>
            <input type="email" value={form.email} onChange={changeValue} name="email" autoComplete="email" required/>
        </div>
        <div> 
            <button type="button" onClick={submit}>제출</button>
            <button type="button" onClick={init}>초기화</button>
        </div>
        {submitted && 
        <div>
          <p>{form.name}</p>
          <p>{form.email}</p>
        </div>
        }
     </div>
    </section>
  );
}
