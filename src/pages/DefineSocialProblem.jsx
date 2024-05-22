import styled from 'styled-components';

export default function DefineSocialProblem() {
    return (
        <IntroContainer>
            <HeadText>
                프로젝트 발굴
            </HeadText>
            <SubHeadText>
                '오로라'와 함께라면 누구나 변화를 만들어 나갈 수 있어요.
            </SubHeadText>
        </IntroContainer>
    )  
};

const IntroContainer = styled.div`
    width: 770px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HeadText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize32};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;

const SubHeadText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize18};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    margin-top: 20px;
`;