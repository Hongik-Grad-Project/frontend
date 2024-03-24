import LogoImg from "../assets/images/logo.svg";

import kakaoLogoImg from "../assets/images/LoginLogo/kakaoLogo.svg";
import naverLogoImg from "../assets/images/LoginLogo/naverLogo.svg";
import googleLogoImg from "../assets/images/LoginLogo/googleLogo.svg";

import { LoginWrapper, LeftWrapper, RightWrapper, LoginBox, StartButton, StartButtonAfter, IntroText, Logo, NaverLoginButton, KakaoLoginButton, GoogleLoginButton, LoginLogo, TermsOfUse, StyledLink } from "../styles/Login/LoginStyles";

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
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleApiKey}&redirect_uri=${googleRedirectUri}&response_type=code&scope=email`;

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
        <LoginWrapper>
            <LeftWrapper>
            </LeftWrapper>
            <RightWrapper>
                <LoginBox>
                    <IntroText>팀빌딩의 시작 링킷</IntroText>
                    <Logo src={LogoImg} alt="로고" />

                    <StartButton>
                        3초만에 시작하기
                    </StartButton>
                    <StartButtonAfter />

                    <NaverLoginButton onClick={handleNaverLogin}>
                        <LoginLogo src={naverLogoImg} alt="카카오 로고" />
                        네이버로 로그인하기
                    </NaverLoginButton>

                    <KakaoLoginButton onClick={handleKakaoLogin}>
                        <LoginLogo src={kakaoLogoImg} alt="카카오 로고" />
                        카카오로 로그인하기
                    </KakaoLoginButton>

                    <GoogleLoginButton onClick={handleGoogleLogin}>
                        <LoginLogo src={googleLogoImg} alt="카카오 로고" />
                        구글로 로그인하기
                    </GoogleLoginButton>

                    <TermsOfUse>
                        회원가입시 linkit의&nbsp;
                        <StyledLink to="/terms_of_use" style={{textDecoration: 'underline'}}>
                            서비스 이용약관
                        </StyledLink>
                        과&nbsp;
                        <StyledLink to="/privacy_policy" style={{textDecoration: 'underline'}}>
                            개인정보 보호정책
                        </StyledLink>
                        에 동의하게됩니다.
                    </TermsOfUse>
                </LoginBox>
            </RightWrapper>
        </LoginWrapper>
    );
};

