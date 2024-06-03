import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import CreateChatImg from '../assets/images/createChatImage.svg';
import { useNavigate } from 'react-router';

export default function ChatSummary() {

    const navigate = useNavigate();

    const handleStartProjectClick = () => {
        navigate('/create-project');
    };

    const handleGotoChatClick = () => {
        navigate('/chat');
    };

    return (
        <>
            <HomeNav />
            {/* 일단 전체 컨테이너 필요 */}
            <SummaryContainer>
                {/*전체 컨테이너 안에 왼쪽 부분과 오른쪽 부분 나누기 */}
                <TitleBar>
                    <PickTitleBox>
                        노인 일자리 부족 문제
                        <TimeAndDate>
                            오후 1:24
                        </TimeAndDate>
                    </PickTitleBox>
                    <NonPickTitleBox>
                        쓰레기 문제
                        <TimeAndDate>
                            어제
                        </TimeAndDate>
                    </NonPickTitleBox>
                    <NonPickTitleBox>
                        데이트폭력 문제
                        <TimeAndDate>
                            2024.5.8
                        </TimeAndDate>
                    </NonPickTitleBox>
                    <GoToChatButton onClick={handleGotoChatClick}>
                        <img src={CreateChatImg} alt="GoToChat" />
                    </GoToChatButton>
                </TitleBar>
                <SummaryWrapper>
                    <ProjectSummary>
                        <ProjectTitle>
                            노인 일자리 부족 문제
                        </ProjectTitle>
                        <ProjectContent>
                            현상:<br />
                            · 노인 일자리 문제가 심각<br />
                            · 평균 수명이 늘어나서 은퇴 후에도 일하고 싶은 노인들이 많은데 일자리가 없음 <br /> <br />

                            일자리가 없는 이유<br />
                            · 회사에 다니는 사람은 법정 정년 60세 제한<br /> <br />

                            회사에 다니는 사람이 은퇴 후 하고싶어 하는 것<br />
                            · 본인 직무로 재취업, 다른 직무로 재취업, 자기 사업 시작<br /> <br />

                            그 중에도 돕고 싶은 사람<br />
                            · 자기 사업 시작하는 사람<br /> <br />

                            해결책<br />
                            · 트렌드에 둔감하고 사업 위험성이 큼<br />
                            · 은퇴 후 사업을 시작한 후 성공한 후기를 모아 보는 사이트<br />
                        </ProjectContent>
                    </ProjectSummary>
                    <StartProjectButton onClick={handleStartProjectClick}>
                        프로젝트 하러가기
                    </StartProjectButton>
                </SummaryWrapper>


            </SummaryContainer>
        </>


    )
}

const SummaryContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F4F6FA;
    display: flex;
    justify-content: center;
    
`;

const TitleBar = styled.div`
    margin-top: 20px;

    width: 303px;
    height: 713px;
    flex-shrink: 0;

    border-radius: 5px;
    border: 0.3px sold #9DA1AD;
    background-color: #FFFFFF;

    padding-top: 18px;
    padding-left: 18px;

    position: relative;
`;

const GoToChatButton = styled.div`
    position: absolute;
    bottom: 22px;
    right: 22px;
    width: 42px;
    height: 42px;
    margin-top: 20px; /* 필요에 따라 조정하세요 */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
    }
`;

const PickTitleBox = styled.div`
    width: 263px;
    height: 50px;
    flex-shrink: 0;
    
    background-color: ${(props) => props.theme.colors.keyPurple};

    border-radius: 5px;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    padding: 11px 10px 11px 10px; 

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;

const NonPickTitleBox = styled.div`
    width: 263px;
    height: 50px;
    flex-shrink: 0;
    background-color: #FEFEFE;
    padding-left: 13px;

    border-bottom: 0.3px solid #9DA1AD;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    padding: 11px 10px 11px 10px; 

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;

const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectSummary = styled.div`
    margin-top: 20px;
    margin-left: 65px;

    width: 745px;
    height: 631px;
    flex-shrink: 0;
    border-radius: 5px;

    background-color: #FEFEFE;


`;

const ProjectTitle = styled.div`
    margin-top: 28px;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize40};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

    padding-left: 56px;
`;

const ProjectContent = styled.div`
    margin-top: 8px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

    white-space: pre-wrap;

    padding-left: 56px;
`;

const StartProjectButton = styled.div`
    width: 147px;
    height: 41px; 
    flex-shrink: 0;
    border-radius: 5px;

    background-color: #776BFF;

    margin-left: 663px;
    margin-top: 29px;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 29px;

    cursor: pointer;
`;

const TimeAndDate = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize12};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;
