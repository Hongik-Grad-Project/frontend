import React, { useState } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import CreateChatImg from '../assets/images/createChatImage.svg';
import { useNavigate } from 'react-router';

export default function ChatSummary() {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleStartProjectClick = () => {
        setShowModal(true);
    };

    const handleGotoChatClick = () => {
        navigate('/chat');
    };

    const handleYesClick = () => {
        setShowModal(false);
        navigate('/create-project');
    };

    const handleNoClick = () => {
        setShowModal(false);
        navigate('/create-project');
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
                            <SummaryContentTitle>
                                대상:<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 은퇴 후 사업을 시작하려는 50~60대<br /> <br />
                            </SummaryContentBody>
                            <SummaryContentTitle>
                                주제:<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 노인 일자리 부족 문제<br /> <br />
                            </SummaryContentBody>
                            <SummaryContentTitle>
                                현상:<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 노인 일자리 문제가 심각<br />
                                · 평균 수명이 늘어나서 은퇴 후에도 일하고 싶은 노인들이 많은데 일자리가 없음 <br /> <br />
                            </SummaryContentBody>
                            <SummaryContentTitle>
                                일자리가 없는 이유<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 회사에 다니는 사람은 법정 정년 60세 제한<br /> <br />
                            </SummaryContentBody>
                            <SummaryContentTitle>
                                회사에 다니는 사람이 은퇴 후 하고싶어 하는 것<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 본인 직무로 재취업, 다른 직무로 재취업, 자기 사업 시작<br /> <br />
                            </SummaryContentBody>
                            <SummaryContentTitle>
                                그 중에도 돕고 싶은 사람<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 자기 사업 시작하는 사람<br /> <br />
                            </SummaryContentBody>
                            <SummaryContentTitle>
                                해결책<br />
                            </SummaryContentTitle>
                            <SummaryContentBody>
                                · 트렌드에 둔감하고 사업 위험성이 큼<br />
                                · 은퇴 후 사업을 시작한 후 성공한 후기를 모아 보는 사이트<br />
                            </SummaryContentBody>
                        </ProjectContent>
                    </ProjectSummary>
                    <StartProjectButton onClick={handleStartProjectClick}>
                        프로젝트 하러가기
                    </StartProjectButton>
                </SummaryWrapper>
            </SummaryContainer>
            {showModal && (
                <ModalOverlay>
                    <ModalContent>
                        <p>AI로 기획서 초안을 작성하시겠습니까?</p>
                        <ModalButton onClick={handleYesClick}>예</ModalButton>
                        <ModalButton onClick={handleNoClick}>아니오</ModalButton>
                    </ModalContent>
                </ModalOverlay>
            )}

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
    margin-top: 40px;

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
    width: 30px;
    height: 30px;
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
    margin-top: 40px;
    margin-left: 65px;

    width: 745px;
    height: 653px;
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
    margin-top: 20px;
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
    border-radius: 200px;

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
    transition: transform 0.3s ease;  // 애니메이션 효과의 지속 시간과 함수를 설정
    &:hover {
        transform: scale(1.1);  // 호버 시 10% 크기 증가
    }
`;

const TimeAndDate = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize12};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;


const SummaryContentTitle = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    white-space: pre-wrap;
`;

const SummaryContentBody = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    white-space: pre-wrap;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    width: 400px;
    height: 150px;
    flex-shrink: 0;

    padding-top: 37px;
    background-color: #FFFFFF;
    border-radius: 30px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

`;

const ModalButton = styled.button`
    width: 93px;
    height: 40px;
    padding: 8px;
    margin: 25px;
    border: none;

    border-radius: 200px;
    background-color: #E2E6EF;
    color: ${(props) => props.theme.colors.black};
    
    cursor: pointer;
    
    transition: transform 0.3s ease;  // 애니메이션 효과의 지속 시간과 함수를 설정

    &:hover {
        background-color: #776BFF;
        color: ${(props) => props.theme.colors.white};
        transform: scale(1.1);  // 호버 시 10% 크기 증가

    }

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;
