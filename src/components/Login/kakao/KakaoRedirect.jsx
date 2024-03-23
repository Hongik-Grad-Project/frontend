import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { isLoggedInState } from "../../../states/userState";
import { nickNameState } from "../../../states/userState";


const KakaoRedirect = (props) => {
    const navigate = useNavigate();
    const setIsLoggedIn = useSetRecoilState(isLoggedInState);
    const setIsNickName = useSetRecoilState(nickNameState);
    const [isLoading, setIsLoading] = useState(true);       // 로딩 상태
    const [error, setError] = useState(null);               // 에러 상태

    const code = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        const kakaoLogin = async () => {
            try {
                setIsLoading(true); // 로딩 시작

                const res = await axios({
                    method: "GET",
                    url: `http://localhost:9000/api/v1/oauth2/kakao/developer?code=${code}`,
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    withCredentials: true,
                });

                console.log(res);
                const accessToken = res.data.accessToken;
                localStorage.setItem("accessToken", accessToken); // AccessToken 저장
                console.log(accessToken);

                const nickName = res.data.nickName;
                localStorage.setItem("nickName", nickName); // NickName 저장
                console.log(nickName);

            
                setIsLoggedIn(true); // Recoil을 사용하여 로그인 상태 업데이트
                setIsNickName(nickName); // Recoil을 사용하여 닉네임 상태 업데이트
                setIsLoading(false); // 로딩 종료

                navigate("/"); // 홈으로 리다이렉트
            } catch (error) {
                console.error(error);
                setError(error); // 에러 상태 업데이트
                setIsLoading(false); // 로딩 종료
            }
        };
        kakaoLogin();
    }, [code, navigate, setIsLoggedIn, setIsNickName]);

    if (isLoading) return <div>로그인 중...</div>; // 로딩 중 UI
    if (error) return <div>로그인에 실패했습니다. {error.message}</div>; // 에러 시 UI

    return (
        <div>로그인 중입니다. Accesstoken</div> // 성공 시 UI
    );
};

export default KakaoRedirect;
