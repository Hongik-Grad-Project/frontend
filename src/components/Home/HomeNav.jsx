import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../states/userState";
import LogoImg from "../../assets/images/logo.svg";
import { NavBox, Logo, LeftWrapper, RightWrapper, LinkWrapper, StyledLink, ProfileRegisterButton, UserProfileImg } from "../../styles/Home/NavStyles";


import ProfileImg from "../../assets/images/User/userProfile.svg";

const HomeNav = () => {
    // Recoil을 사용하여 로그인 상태 가져오기
    const [isLoggedIn] = useRecoilState(isLoggedInState);
    const navigate = useNavigate();
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleProfileRegisterClick = (e) => {
        console.log("프로필 등록 버튼 클릭");
        if (isLoggedIn) {
            // 로그인한 상태라면, 프로필 등록 페이지로 이동
            navigate("/profile/register");
        } else {
            // 로그인하지 않은 상태라면, 로그인 팝업창 띄우기
            setShowLoginPopup(true);
        }
    };

    console.log("로그인 여부: ", isLoggedIn)
    return (
        <NavBox>
            <LeftWrapper>
                <Logo src={LogoImg} alt="로고" />
            </LeftWrapper>
            <RightWrapper>
                <LinkWrapper>
                    <StyledLink to="/about">링킷 소개</StyledLink>
                    <StyledLink to="/faq">FAQ</StyledLink>
                    {isLoggedIn ? (
                        // 로그인한 사용자를 위한 옵션
                        <>
                            <UserProfileImg src={ProfileImg} alt="프로필 이미지" />
                            <StyledLink to="/mypage">사용자이름</StyledLink>
                        </>
                    ) : (
                        <>
                            <StyledLink to="/login">로그인</StyledLink>
                        </>
                    )}
                    <ProfileRegisterButton onClick={handleProfileRegisterClick}>이력서 등록</ProfileRegisterButton>
                </LinkWrapper>
            </RightWrapper>
        </NavBox>
    );
}

export default HomeNav;
