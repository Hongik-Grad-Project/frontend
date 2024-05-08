import LogoImg from "../assets/images/logo.svg";

import kakaoLogoImg from "../assets/images/LoginLogo/kakaoLogo.svg";
import naverLogoImg from "../assets/images/LoginLogo/naverLogo.svg";
import googleLogoImg from "../assets/images/LoginLogo/googleLogo.svg";

import { LoginContainer, LoginBox, Logo, TextWrapper, SignUpText, 
    IntroText, OneLine, NaverLoginButton, KakaoLoginButton, GoogleLoginButton, 
    LoginLogo, OrWrapper, HalfLineLeft, HalfLineRight,
    SignUpBox, AskAccount} from "../styles/User/LoginStyles";

const protocol = window.location.protocol;

const kakaoApiKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
const naverApiKey = process.env.REACT_APP_NAVER_REST_API_KEY;
const googleApiKey = process.env.REACT_APP_GOOGLE_REST_API_KEY;

// 일단 이 형태로 냅두고 나중에 env에서 수정할 예정

const kakaoRedirectUri = `${protocol}//localhost:3000/login/oauth2/callback/kakao`;
const naverRedirectUri = `${protocol}//localhost:3000/login/oauth2/callback/naver`;
const googleRedirectUri = `${protocol}//localhost:3000/login/oauth2/callback/google`;

const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoApiKey}&redirect_uri=${kakaoRedirectUri}&response_type=code`;
const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverApiKey}&redirect_uri=${naverRedirectUri}&state=test`;
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleApiKey}&redirect_uri=${googleRedirectUri}&response_type=code&scope=email profile`;

export default function Login() {

    const handleNaverLogin = () => {
        window.location.href = naverURL;
    };

    const handleKakaoLogin = () => {
        window.location.href = kakaoURL;
    };

    const handleGoogleLogin = () => {
        window.location.href = googleURL;
    };


    return (
        <LoginContainer>
                <LoginBox>
                    <Logo src={LogoImg} alt="로고" />

                    <TextWrapper>
                        <SignUpText>회원가입하기</SignUpText>
                        <IntroText>소셜 로그인 및 이메일로 가입할 수 있습니다.</IntroText>
                    </TextWrapper>
                    
                    <OneLine/>

                    <GoogleLoginButton onClick={handleGoogleLogin}>
                        <LoginLogo src={googleLogoImg} alt="카카오 로고" />
                        Google로 시작하기
                    </GoogleLoginButton>

                    <KakaoLoginButton onClick={handleKakaoLogin}>
                        <LoginLogo src={kakaoLogoImg} alt="카카오 로고" />
                        카카오로 시작하기
                    </KakaoLoginButton>
                    
                    <NaverLoginButton onClick={handleNaverLogin}>
                        <LoginLogo src={naverLogoImg} alt="카카오 로고" />
                        네이버로 시작하기
                    </NaverLoginButton>

                    <OrWrapper>
                        <HalfLineLeft/>
                        또는
                        <HalfLineRight/>
                    </OrWrapper>

                    <SignUpBox>
                        ID / PW 회원가입
                    </SignUpBox>

                    <AskAccount>
                        이미 계정이 있으신가요? 로그인
                    </AskAccount>
                </LoginBox>
        </LoginContainer>
    );
};

