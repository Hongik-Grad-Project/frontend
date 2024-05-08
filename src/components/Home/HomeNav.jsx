import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../states/userState";
import LogoImg from "../../assets/images/logo.svg";
import { NavBox, Logo, LeftWrapper, RightWrapper, LinkWrapper, StyledLink, SearchButton, LoginButton } from "../../styles/Home/NavStyles";

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

    console.log("로그인 여부: ", isLoggedIn)
    return (
        <NavBox>
            <LeftWrapper>
                <Logo src={LogoImg} alt="로고" />
                <LinkWrapper>
                    <StyledLink to="/home">홈</StyledLink>
                    <StyledLink to="/social/define">사회문제 정의하기</StyledLink>
                    <StyledLink to="/inProgress">진행중인 프로젝트</StyledLink>
                </LinkWrapper>
            </LeftWrapper>
            <RightWrapper>
                <SearchButton src = {SearchImg} alt="검색 이미지"/>
                <LoginButton onClick={handleLogin}>
                    <img src={ProfileImg} alt="프로필 이미지" style={{ width: '100%', height: '100%' }} />
                </LoginButton>
            </RightWrapper>
        </NavBox>
    );
}

export default HomeNav;
