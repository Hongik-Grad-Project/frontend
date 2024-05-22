import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
    background-color: ${(props) => props.theme.colors.lightGrey};
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

export const LoginBox = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    width: 504px;
    height: 658px;
    flex-shrink: 0;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

`;

export const TextWrapper = styled.div`
    width: 378px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 35px;
`;

export const SignUpText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;

export const IntroText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize12};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

    margin-bottom: 35px;
`;



export const Logo = styled.img`
    width: 242px;
    height: 46px;
    margin-bottom: 49px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 66.95px;
    }
`;

export const NaverLoginButton = styled.a`
    width: 378px;
    height: 42px;
    background-color: #04BF19;
    border-radius: 5px;
    margin-top: 16px;
    margin-bottom: 38px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    color: ${(props) => props.theme.colors.black};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};

    text-decoration: none;
    cursor: pointer;
`;

export const KakaoLoginButton = styled.a`
    width: 378px;
    height: 42px;
    background-color: #FDDC3F;
    border-radius: 5px;    
    margin-top: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    color: ${(props) => props.theme.colors.black};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};

    text-decoration: none;
    cursor: pointer;
`;

export const GoogleLoginButton = styled.a`
    width: 378px;
    height: 42px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 6px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    color: ${(props) => props.theme.colors.black};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    
    text-decoration: none;
    cursor: pointer;

    border: 0.6px solid #C1C1C1;
`;

export const LoginLogo = styled.img`
    margin-left: 12px;
    margin-right: 117px;
    width: 15px;
    height: 15px;
`;

export const OrWrapper = styled.div`
    width: 378px;
    height: 17px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    color: ${(props) => props.theme.colors.black};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
`;

export const OneLine = styled.div`
    width: 378px;
    height: 1px;
    
    background-color: #CDCDCD;
    stroke-width: 0.6px;

    margin-bottom: 25px;
`;

export const HalfLineLeft = styled.div`
    width: 161px;
    height: 1px;
    background-color: #CDCDCD;
    stroke-width: 0.6px;
    margin-right: 15px;
`;

export const HalfLineRight = styled.div`
    width: 161px;
    height: 1px;
    background-color: #CDCDCD;
    stroke-width: 0.6px;
    margin-left: 15px;
`;

export const SignUpBox = styled.div`
    width: 378px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    border-radius: 6px;
    border: 0.6px solid #C1C1C1;
    background: ${(props) => props.theme.colors.white};

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    color: #646464;

    margin-bottom: 23px;
`;

export const AskAccount = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize10};
    color: ${(props) => props.theme.colors.black};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};

    margin-top: 23px;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize10};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #00BF53;

    text-decoration: underline;
    transition: all 0.3s ease;

    margin-left: 5px;
`;