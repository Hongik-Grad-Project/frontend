import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../states/userState";
import LogoImg from "../../assets/images/logo.svg";
import { NavBox, Logo, LinkWrapper, StyledLink, SearchButton, LoginButton } from "../../styles/Home/NavStyles";

import ProfileImg from "../../assets/images/User/userBasicProfile.svg";
import SearchImg from "../../assets/images/User/SearchButton.svg"

const HomeNav = () => {
    // Recoil을 사용하여 로그인 상태 가져오기
    const [isLoggedIn] = useRecoilState(isLoggedInState);
    const navigate = useNavigate();
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <NavBox>
            {/* <NavWrapper>
                
            </NavWrapper> */}
            <Logo src={LogoImg} alt="로고" />
            <LinkWrapper>
                <StyledLink to="/home">홈</StyledLink>
                <StyledLink to="/define-social-problem">사회문제 정의하기</StyledLink>
                <StyledLink to="/challenge-project">도전 프로젝트</StyledLink>
                <StyledLink to="/hall-of-fame">명예의 전당</StyledLink>
            </LinkWrapper>
            <SearchButton src={SearchImg} alt="검색 이미지" />
            <LoginButton onClick={handleLogin}>
                <img src={ProfileImg} alt="프로필 이미지" style={{ width: '100%', height: '100%' }} />
            </LoginButton>
        </NavBox>
    );
}

export default HomeNav;
