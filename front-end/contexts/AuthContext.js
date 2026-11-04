"use client"

import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext();

export default function AuthContextProvider({children}){

    const [memberId, setMemberId] = useState("");
    const [jwt, setJwt] = useState("");
    const [isInitialized, setIsInitialized] = useState(false);
    // 앱 시작 시 저장된 로그인 정보를 복원합니다.
    useEffect(() => {
        const savedMemberId = localStorage.getItem("memberId");
        const savedJwt = localStorage.getItem("jwt");
        
        if (savedMemberId && savedJwt) {
            // localStorage는 서버 렌더링 중 읽을 수 없어 마운트 후 상태를 복원합니다.
            /* eslint-disable react-hooks/set-state-in-effect */
            setMemberId(savedMemberId);
            setJwt(savedJwt);
            /* eslint-enable react-hooks/set-state-in-effect */
        }

        // 저장된 정보가 없어도 복원 확인은 완료된 상태입니다.
        setIsInitialized(true);
    }, []);

    const login = (memberId, jwt) => {
        localStorage.setItem("memberId", memberId);
        localStorage.setItem("jwt", jwt);
        setMemberId(memberId);
        setJwt(jwt);
    };

    const logout = () => {
        localStorage.removeItem("memberId");
        localStorage.removeItem("jwt");
        setMemberId("");
        setJwt("");
    };

    const token = {
        memberId,
        jwt,
        login,
        logout,
        isInitialized
    }

    return (
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    );
};
