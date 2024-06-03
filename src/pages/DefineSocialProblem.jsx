import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import Logoimg from '../assets/images/logo.svg';
import { useNavigate } from 'react-router';

export default function DefineSocialProblem() {

    const navigate = useNavigate();

    const handleChatClick = () => {
        navigate('/chat');
    };

    return (
        <>
            <HomeNav />
            <IntroContainer>
                <HeadText>
                    프로젝트 발굴
                </HeadText>
                <SubHeadText>
                    '오로라'와 함께라면 누구나 변화를 만들어 나갈 수 있어요.
                </SubHeadText>
                <DefineSocialContainer>
                    <TopDSContainer>
                        <LeftHeadText>
                            어떤 사회문제를 해결해야 할지 모르겠나요?
                        </LeftHeadText>
                        <BodyBox>
                            <BodyLeftBox>
                                <LeftSubHeadText>
                                    긍정적인 사회 변화를 위한 <br />
                                    공익 프로젝트를 진행할 수 있어요!
                                </LeftSubHeadText>
                                <LeftChatButton onClick={handleChatClick}>
                                    AI와 채팅하기
                                </LeftChatButton>
                            </BodyLeftBox>
                            <BodyRightBox>
                                <img src={Logoimg} alt="로고" />
                            </BodyRightBox>
                        </BodyBox>
                    </TopDSContainer>
                    <BottomDSContainer>
                        <NumberContainer>
                            <NumberNotice>
                                1
                            </NumberNotice>
                            <ConnectRow/>
                            <NumberNotice>
                                2
                            </NumberNotice>
                            <ConnectRow/>
                            <NumberNotice>
                                3
                            </NumberNotice>
                            <ConnectRow/>
                            <NumberNotice>
                                4
                            </NumberNotice>
                            <ConnectRow/>
                            <NumberNotice>
                                5
                            </NumberNotice>
                        </NumberContainer>
                        <TextContainer>
                            <TextWrapper>
                                <TextHeader>
                                    사회 문제 논의
                                </TextHeader>
                                <TextBody>
                                    오로라 AI와 함께<br/>
                                    사회 문제를 정의해봐요.
                                </TextBody>
                            </TextWrapper>
                            <TextWrapper>
                                <TextHeader>
                                    모금 제안
                                </TextHeader>
                                <TextBody>
                                    모금의 세부 내용과<br/>
                                    집행 계획을 입력해요.
                                </TextBody>
                            </TextWrapper>
                            <TextWrapper>
                                <TextHeader>
                                    모금 심사
                                </TextHeader>
                                <TextBody>
                                    전문 기관의 검토를<br/>
                                    거쳐 모금을 오픈해요.
                                </TextBody>
                            </TextWrapper>
                            <TextWrapper>
                                <TextHeader>
                                    모금 진행
                                </TextHeader>
                                <TextBody>
                                    공유, 응원, 댓글로<br/>
                                    참여해요.
                                </TextBody>
                            </TextWrapper>
                            <TextWrapper>
                                <TextHeader>
                                    모금종료 및 후기
                                </TextHeader>
                                <TextBody>
                                    기부금 사용 후기를<br/>
                                    등록해요
                                </TextBody>
                            </TextWrapper>
                        </TextContainer>
                    </BottomDSContainer>

                </DefineSocialContainer>
            </IntroContainer>
        </>
    )
};

const IntroContainer = styled.div`
    background-color: ${(props) => props.theme.colors.lightGrey};
    width: 100%;
    height: calc(100vh - 80px);
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
    margin-top: 5px;
    margin-bottom: 54px;
`;

const DefineSocialContainer = styled.div`
    width: 770px;
    height: 439px;
    flex-shrink: 0;

    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
`;

const TopDSContainer = styled.div`
    width: 770px;
    height: 219px;
    display: flex;
    flex-direction: column;
    background-color: #AEA0FF;
    border-radius: 10px 10px 0 0;
`;

const LeftHeadText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize22};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 4px;
    margin-top: 27px;
    margin-left: 29px;
`;

const BodyBox = styled.div`
    width: 770px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LeftSubHeadText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    white-space: pre-wrap;
    margin-left: 29px;
`;

const LeftChatButton = styled.button`
    width: 132px;
    height: 40px;
    flex-shrink: 0;

    border-radius: 20px;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    
    margin-top: 40px;
    margin-left: 29px;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #AEA0FF;

    cursor: pointer;
    
    transition: transform 0.3s ease;  // 애니메이션 효과의 지속 시간과 함수를 설정

    &:hover {
        transform: scale(1.1);  // 호버 시 10% 크기 증가
    }
`;


const BodyLeftBox = styled.div`
`;

const BodyRightBox = styled.div`
  img {
    width: 350px;  // 너비 설정
    height: 100px;  // 높이를 자동으로 조절하여 이미지 비율 유지
    margin-right: 34px;  // 오른쪽 여백 30px
    }
`;

const BottomDSContainer = styled.div`
    width: 770px;
    display: flex;
    flex-direction: column;
`;

const NumberContainer = styled.div`
    width: 770px;
    height: 40px;
    display: flex;
    flex-direction: row;
    padding-left: 29px;
    padding-top: 40px;
`;

const NumberNotice = styled.div`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize18};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

    background-color: #AEA0FF;
`;

const ConnectRow = styled.div`
    width: 110px;
    height: 2.5px;
    background-color: #AEA0FF;
    margin: 20px 0;
`;

const TextContainer = styled.div`
    width: 770px;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding-left: 29px;
    padding-top: 25px;


`;

const TextWrapper = styled.div`
    width: 150px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const TextHeader = styled.div`
    width: 162px;    
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    
    margin-bottom: 4px;
`;

const TextBody = styled.div`
    width: 162px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.semiDarkGrey};
    white-space: pre-wrap;
`;
