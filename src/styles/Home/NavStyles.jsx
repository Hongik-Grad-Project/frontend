import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBox = styled.div`
    height: 80px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.greyscale00};
    display: flex;
    align-items: center;

    @media (max-width: 1120px) {
        width: 1120px; // 너비를 100%로 설정하여 부모 요소에 따라 조절되도록 함
        overflow-x: auto; // 1120px 이하에서 가로 스크롤바가 나타나지 않도록 설정
    }
`;

export const LeftWrapper = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
`;

export const RightWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: 110.25px;
    height: 20.75px;
    margin-left: 143px;
    flex-shrink: 0;
`;

// font-size: 0.875rem; = font-size: 14px;

export const LinkWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
`;

export const StyledLink = styled(Link)`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.body14Medium};
    color: ${(props) => props.theme.colors.greyscale80};

    text-decoration: none;
    margin: 0 20px;
    transition: all 0.3s ease;
`;

export const UserProfileImg = styled.img`
    width: 1.875rem;
    height: 1.875rem;
`;

export const ProfileRegisterButton = styled.button`
    height: 35px;
    width: 114px;
    justify-content: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.body14Medium};

    background-color: ${(props) => props.theme.colors.keyblue40};
    color: ${(props) => props.theme.colors.greyscale00};

    margin-left: 30px;
    margin-right: 94px;

    border: none;
    gap: 7.5px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease;
    }
`;