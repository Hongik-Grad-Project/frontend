import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { isLoggedInState } from "../../../states/userState";


const KakaoRedirect = (props) => {
    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const [error, setError] = useState(null);
    
    const code = new URL(window.location.href).searchParams.get("code");    // 인증 코드
    const provider = "google"; // 로그인 제공자

    // useEffect(() => {
    //     const googleLogin = async () => {
    //         try {
    //             fetch(`http://13.209.251.1/login/${provider}`, {
    //                 method: 'POST',
    //                 headers: { "Content-Type": "application/json;charset=utf-8" },
    //                 credentials: 'include', // 쿠키를 포함시키기 위해 필요
    //                 body: JSON.stringify({ code: code }) // 로그인 요청 본문에 인증 코드 포함
    //             })
    //                 .then(response => response.json())
    //                 .catch(error => {
    //                     console.error("로그인에 실패했습니다.", error);
    //                 });
    //         } catch (error) {
    //             setError(error);
    //         }
    //     };
    //     googleLogin();
    // }, [code, navigate, setIsLoggedIn]);

    // if (error) return <div>로그인에 실패했습니다. {error.message}</div>; // 에러 시 UI


    useEffect(() => {
        const googleLogin = async () => {
            try {
                fetch(`http://13.209.251.1/login/${provider}`, {
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
        googleLogin();
    }, [code, navigate, setIsLoggedIn]);

    if (error) return <div>로그인에 실패했습니다. {error.message}</div>; // 에러 시 UI
};

export default KakaoRedirect;
