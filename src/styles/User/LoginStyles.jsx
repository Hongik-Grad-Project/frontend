import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @media (max-width: 1120px) {
        width: 1120px;
        overflow-x: auto;
    }
`;

export const LeftWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.keyblue10};
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const RightWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.greyscale00};
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow-x: hidden;

    @media (max-width: 1120px) {
        width: 1120px;
        overflow-x: auto;
    }
`;

export const StartButton = styled.div`
    width: 126px;
    height: 45px;
    background-color: ${(props) => props.theme.colors.greyscale20};
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.caption12Medium};
    color: ${(props) => props.theme.colors.greyscale100};
    line-height: ${(props) => props.theme.LineHeights.caption12Medium};
    
    text-decoration: none;
`;

export const StartButtonAfter = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 16px solid ${(props) => props.theme.colors.greyscale20};

    margin-bottom: 29px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    text-decoration: none;
`;

export const IntroText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.subtitle20Medium};
    line-height: ${(props) => props.theme.LineHeights.subtitle20Medium};
    color: ${(props) => props.theme.colors.greyscale100};

    margin-bottom: 20px;
`;

export const Logo = styled.img`
    width: 242px;
    height: 46px;
    margin-bottom: 66.95px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 66.95px;
    }
`;

export const NaverLoginButton = styled.a`
    width: 420px;
    height: 56px;
    background-color: #00C73C;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSizes.subtitle16SemiBold};
    color: ${(props) => props.theme.colors.greyscale00};
    line-height: ${(props) => props.theme.LineHeights.subtitle16Semibold};
    
    text-decoration: none;
    cursor: pointer;
`;

export const KakaoLoginButton = styled.a`
    width: 420px;
    height: 56px;
    background-color: #FFE500;
    border-radius: 5px;    
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSizes.subtitle16SemiBold};
    color: ${(props) => props.theme.colors.greyscale100};
    line-height: ${(props) => props.theme.LineHeights.subtitle16Semibold};
    
    text-decoration: none;
    cursor: pointer;
`;

export const GoogleLoginButton = styled.a`
    width: 420px;
    height: 56px;
    background-color: ${(props) => props.theme.colors.greyscale00};
    border-radius: 5px;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    font-size: ${(props) => props.theme.fontSizes.subtitle16SemiBold};
    color: ${(props) => props.theme.colors.greyscale100};
    line-height: ${(props) => props.theme.LineHeights.subtitle16Semibold};
    
    text-decoration: none;
    cursor: pointer;

    border: 1px solid ${(props) => props.theme.colors.greyscale30};
`;

export const LoginLogo = styled.img`
    width: 23px;
    height: 23px;
`;

export const TermsOfUse = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.caption12Regular};
    color: ${(props) => props.theme.colors.greyscale60};
    line-height: ${(props) => props.theme.LineHeights.caption12Regular};
    
    text-decoration: none;

    position: fixed;
    bottom: 0;

    overflow-x: hidden;
    
    @media (max-width: 1120px) {
        width: 1120px;
        overflow-x: auto;
    }
`;

export const StyledLink = styled(Link)`
    color: ${(props)=>props.theme.colors.greyscale60};
    text-decoration: none;
`;