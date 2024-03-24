import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../states/userState";
import { nickNameState } from "../../states/userState";
import LogoImg from "../../assets/images/logo.svg";
import { NavBox, Logo, LinkWrapper, ProfileRegisterButton, UserProfileImg } from "../../styles/Home/NavStyles";

import ProfileImg from "../../assets/images/User/userProfile.svg";

const HomeNav = () => {
    // Recoil을 사용하여 로그인 상태 가져오기
    const [isLoggedIn] = useRecoilState(isLoggedInState);
    const [nickName] = useRecoilState(nickNameState);
    console.log(isLoggedIn);

    return (
        <NavBox>
            <Logo src={LogoImg} alt="로고" />
            <LinkWrapper>
                <Link to="/about">링킷 소개</Link>
                <Link to="/faq">FAQ</Link>
                {isLoggedIn ? (
                    // 로그인한 사용자를 위한 옵션
                    <>
                        <UserProfileImg src={ProfileImg} alt="프로필 이미지" />
                        <Link to="/mypage">{nickName}</Link>
                    </>

                ) : (
                    <>
                        <Link to="/login">로그인</Link>
                    </>
                )}
            </LinkWrapper>

            <ProfileRegisterButton>
                <Link to="/profile/register">이력서 등록</Link>
            </ProfileRegisterButton>
        </NavBox>
    );

}

export default HomeNav;
