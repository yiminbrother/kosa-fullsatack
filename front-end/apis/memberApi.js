import apiClient from "./axios";



// 회원가입: memberId, memberName, password, email을 JSON으로 전송
export function memberJoin(joinForm) {
  return apiClient.post("/member/join-member", joinForm);
}


// 로그인 memberId, password
export function login(loginForm){
  return apiClient.post("/member/login-member",loginForm);
}