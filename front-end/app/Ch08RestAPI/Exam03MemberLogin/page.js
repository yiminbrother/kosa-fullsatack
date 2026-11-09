"use client";

import { login } from "@/apis/memberApi";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Exam03MemberLogin() {

  const router = useRouter();

  const authContext = useContext(AuthContext);
  function validateMemberId(value) {
    return value.trim() ? "" : "아이디를 입력해 주세요.";
  }

  function validatePassword(value) {
    return value.trim() ? "" : "비밀번호를 입력해 주세요.";
  }

  const [errors, setErrors] = useState({});

  const [loginForm, setLoginForm] = useState({
    memberId: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" })
  };

  const handleLogin = async () => {
    // 입력 양식별로 유효성 검사함수를 호출해서 반한된 에러 메시지를 이벤트 처리 함수 
    const nextErrors = {
      memberId: validateMemberId(loginForm.memberId),
      password: validatePassword(loginForm.password),
    };
    // 에러메시지 상태에 반영
    setErrors(nextErrors);
    // 에러 메시지 중에 하나라도 빈문자열이 아닌것이 있을경우, 함수 실행종료 
    if (Object.values(nextErrors).some((message) => message)) return;

    // 백엔드 api 호출 

    try {
      const resp = await login(loginForm);
      if (resp.data.status === "success") {
        
        // 전역 상태와 로컬 스토리지에 로그인 정보를 저장
        authContext.login(resp.data.memberId, resp.data.jwt);

        // 홈으로 이동
        router.push("/"); 
      } else {
        alert(resp.data.msg);
      }

    } catch (e) {
      console.error(e);
    }


  };

  return (
    <section className="w-full rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
      <header className="rounded-t-lg border-b border-zinc-200 bg-zinc-100 px-4 py-1 dark:border-zinc-700 dark:bg-zinc-800">
        <h2 className="font-semibold">Exam03MemberLogin</h2>
      </header>
      <div className="p-4">
        <div className="max-w-md space-y-4">
          <label className="block text-sm font-medium" htmlFor="memberId">
            아이디
            <input
              id="memberId"
              name="memberId"
              value={loginForm.memberId}
              aria-invalid={Boolean(errors.memberId)}
              aria-describedby={errors.memberId ? "memberId-error" : undefined}
              onChange={handleChange}
              type="text"
              autoComplete="username"
              className="mt-1 block w-full rounded border border-zinc-300 px-3 py-2 focus:outline-2 focus:outline-orange-500 dark:border-zinc-600 dark:bg-zinc-800"
            />
            {errors.memberId && <span id="memberId-error" role="alert" className="mt-1 block text-sm text-red-600 dark:text-red-400">{errors.memberId}</span>}
          </label>
          <label className="block text-sm font-medium" htmlFor="password">
            비밀번호
            <input
              id="password"
              name="password"
              value={loginForm.password}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              onChange={handleChange}
              type="password"
              autoComplete="current-password"
              className="mt-1 block w-full rounded border border-zinc-300 px-3 py-2 focus:outline-2 focus:outline-orange-500 dark:border-zinc-600 dark:bg-zinc-800"
            />
            {errors.password && <span id="password-error" role="alert" className="mt-1 block text-sm text-red-600 dark:text-red-400">{errors.password}</span>}
          </label>
          <div className="flex gap-2">
            <button type="button" onClick={handleLogin} className="rounded bg-orange-500 px-3 py-1.5 text-sm text-white hover:bg-orange-600">
              로그인
            </button>
            <button type="button" className="rounded border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800">
              회원가입
            </button>
            <button type="button" className="rounded border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800">
              목록
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
