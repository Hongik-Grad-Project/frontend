import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { isLoggedInState } from "../../../states/userState";

const NaverRedirect = (props) => {
    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const [error, setError] = useState(null);               // 에러 상태

    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        const naverLogin = async () => {
            try {
                const res = await axios({
                    method: "GET",
                    url: `http://localhost:9000/api/v1/oauth2/naver/developer?code=${code}`,
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    withCredentials: true,
                });

                console.log(res);
                const accessToken = res.data.accessToken;
                localStorage.setItem("accessToken", accessToken); // AccessToken 저장
                console.log(accessToken);

                setIsLoggedIn(true); // Recoil을 사용하여 로그인 상태 업데이트

                navigate("/"); // 홈으로 리다이렉트
            } catch (error) {
                console.error(error);
                setError(error); // 에러 상태 업데이트

            }
        };
        naverLogin();
    }, [code, navigate, setIsLoggedIn]);

    if (error) return <div>로그인에 실패했습니다. {error.message}</div>; // 에러 시 UI

};

export default NaverRedirect;