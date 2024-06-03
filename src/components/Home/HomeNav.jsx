import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import styled from 'styled-components';

import ProfileImg from "../../assets/images/User/userBasicProfile.svg";
import SearchImg from "../../assets/images/User/SearchButton.svg"

export default function HomeNav(){
    // Recoil을 사용하여 로그인 상태 가져오기
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };


    const handleLogoClick = () => {
        navigate('/');  
    };

    return (
        <NavBox>
            <NavWrapper>
                <Logo src={LogoImg} alt="로고" onClick={handleLogoClick}/>
                <LinkWrapper>
                    <StyledLink as={NavLink} to="/home">홈</StyledLink>
                    <StyledLink as={NavLink} to="/define-social-problem">사회문제 정의하기</StyledLink>
                    <StyledLink as={NavLink} to="/challenge-project">도전 프로젝트</StyledLink>
                    <StyledLink as={NavLink} to="/hall-of-fame">명예의 전당</StyledLink>
                </LinkWrapper>

                <SearchAndMyWrapper>
                    <SearchButton src={SearchImg} alt="검색 이미지" />
                    <LoginButton onClick={handleLogin}>
                        <img src={ProfileImg} alt="프로필 이미지" style={{ width: '100%', height: '100%' }} />
                    </LoginButton>
                </SearchAndMyWrapper>
            </NavWrapper>
        </NavBox>
    );
}

export const NavBox = styled.div`
    height: 80px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #F0F0F0;
`;
 
export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 113px;
    height: 33px;
    flex-shrink: 0;
    margin-right: 240px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const SearchAndMyWrapper = styled.div`
    display: flex;

    align-items: center;
    margin-left: 200px;
`;

export const StyledLink = styled(NavLink)`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize18};
    color: ${(props) => props.theme.colors.black};

    text-decoration: none;
    margin: 0 20px;
    transition: all 0.3s ease;
`;

export const SearchButton = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 10px;
`
export const LoginButton = styled.button`
    width: 42px;
    height: 43px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;  // 마우스 포인터를 클릭 가능하게 변경
    margin-left: 30px;
`;