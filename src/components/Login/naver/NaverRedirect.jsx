import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { isLoggedInState } from "../../../states/userState";

const NaverRedirect = (props) => {
    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const [error, setError] = useState(null);
    const code = new URL(window.location.href).searchParams.get("code");    // 인증 코드
    const provider = "naver"; // 로그인 제공자
    // 카카오 로그인(회원가입)
    // 신규 사용자 및 기존 사용자 구분 필요
    // accessToken refreshToken에 따른 작업 필요
    useEffect(() => {
        const naverLogin = async () => {
            try {
                fetch(`https://dev.myaurora.co.kr/login/${provider}`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json;charset=utf-8" },
                    credentials: 'include', // 쿠키를 포함시키기 위해 필요
                    body: JSON.stringify({ code: code }) // 로그인 요청 본문에 인증 코드 포함
                })
                    .then(response => response.json())
                    .catch(error => {
                        console.error("로그인에 실패했습니다.", error);
                    });
            } catch (error) {
                setError(error);
            }
        };
        naverLogin();
    }, [code, navigate]);

    if (error) return <div>로그인에 실패했습니다. {error.message}</div>; // 에러 시 UI

};

export default NaverRedirect;