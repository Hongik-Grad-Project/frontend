import React, { useState } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import AddImg from '../assets/images/imageAddButton.svg';
import DropDown from '../components/Dropdown/Dropdown';
import DateRangePicker from '../components/DatePicker/DateRangePicker';
import { useNavigate } from 'react-router';

export default function CreateProject() {
    const navigate = useNavigate();
    const [target, setTarget] = useState('대상 선택');
    const [subject, setSubject] = useState('주제 선택');

    const handleBackButtonClick = () => {
        navigate('/chat/summary');
    };

    const handleNextButtonClick = () => {
        navigate('/project-body');
    };

    const targetOptions = ["아동", "청소년", "청년", "여성", "실버세대", "장애인", "이주민", "다문화", "지구촌", "어려운이웃", "우리사회", "유기동물", "야생동물"];
    const subjectOptions = ["모두의교육", "기본생활지원", "안정된일자리", "건강한삶", "인권평화와역사", "동물", "지역공동체", "더나은사회", "환경"];

    return (
        <>
            <HomeNav />
            <CreateProjectContainer>
                <ContentBody>
                    <ContentTitle>타겟 대상과 주제 선택 <StyledAsterisk>*</StyledAsterisk></ContentTitle>
                    <ContentText>
                        프로젝트를 통해 도움을 주고 싶은 대상과 주제를 선택하세요. <br />
                        예를 들어, 유기견 관련 프로젝트를 진행하고 싶다면 대상은 "유기견", 주제는 "유기동물"입니다.
                    </ContentText>
                    <DropDownContainer>
                        <DropDown
                            options={targetOptions}
                            placeholder="대상 선택"
                            onSelect={setTarget}
                        />
                        <DropDown
                            options={subjectOptions}
                            placeholder="주제 선택"
                            onSelect={setSubject}
                        />
                    </DropDownContainer>

                    <ContentTitle>참여 대상</ContentTitle>
                    <ContentText>
                        프로젝트에 참여하기를 바라는 대상이 있나요? 있을 수도 있고, 없을 수도 있습니다. <br />
                        만약 “노인 일자리 문제"를 해결하기 위한 아이디어 공유 플랫폼의 경우, 타겟 대상과 참여 대상이 동일하므로 해당 란은 채우지 않아도 됩니다. <br />
                        그러나 “유기견 구호 물품 전달" 같은 경우, 타겟 대상은 “유기견", 참여 대상은 “유기견에게 마음을 전하고 싶은 애견인"이 될 수 있습니다.
                    </ContentText>
                    <HopeProjectMember placeholder='프로젝트에 참여하기를 바라는 대상이 누구인가요?' />

                    <ContentTitle>프로젝트 기간 <StyledAsterisk>*</StyledAsterisk></ContentTitle>
                    <ContentText>
                        정확한 기간을 정하기 어렵다면, 대략적인 시작 기간이라도 적어주세요! <br />
                        프로젝트 수행 목표가 수립되면, 실행력이 높아집니다.
                    </ContentText>
                    <DateWrapper>
                        <DateRangePicker />
                        <span> ~ </span>
                        <DateRangePicker />

                    </DateWrapper>

                    <ContentTitle>프로젝트 제목 <StyledAsterisk>*</StyledAsterisk></ContentTitle>
                    <ContentText>
                        프로젝트의 핵심 키워드를 포함하여 공백 포함 60자 이내로 작성해주세요. <br />
                        사회 문제, 대상, 얻을 수 있는 효과가 포함되면 좋습니다! <br />
                        ex) “은퇴 후 사업 시작, 안전하게!”
                    </ContentText>
                    <ProjectMainValue placeholder='프로젝트의 핵심 가치를 포함하여 제목에 적어주세요!' />

                    <ContentTitle>대표 사진 <StyledAsterisk>*</StyledAsterisk></ContentTitle>
                    <ContentImageBox>
                        대표 사진 이미지 사이즈 <br />
                        최소: 가로 1400px, 세로 960px <br />
                        <ImageButton src={AddImg} alt="Add Image Button" />
                    </ContentImageBox>
                </ContentBody>
                <ButtonBox>
                    <BackButton onClick={handleBackButtonClick}>
                        이전
                    </BackButton>
                    <NextButton onClick={handleNextButtonClick}>
                        다음
                    </NextButton>
                </ButtonBox>
            </CreateProjectContainer>
        </>
    )
};

const CreateProjectContainer = styled.div`
    background-color: #FEFEFE;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 26px; // 상단 네비게이션 바 공간 확보

    background-color: #F4F6FA;
`;

const ContentBody = styled.div`
    width: 950px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background-color: #FEFEFE;
    padding-top: 31px;
    padding-left: 64px;
`;

const ContentTitle = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize26};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 10px;
`;

const ContentText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    white-space: pre-wrap;
    margin-bottom: 20px;
`;

const ContentImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 670px;
    height: 460px;
    background-color: #6A6F7A;
    margin-bottom: 40px;
    white-space: pre-wrap;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize12};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.white};
`;

const ImageButton = styled.img`
    width: 30px; /* 버튼의 가로 크기 */
    height: 30px; /* 버튼의 세로 크기, 비율 유지 */
    cursor: pointer; /* 마우스 오버 시 포인터 변경 */
    margin-top: 8px; /* 텍스트와의 여백 */
`;

const ButtonBox = styled.div`
    width: 1014px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 84px;

    background-color: #FEFEFE;

    padding-bottom: 31px;
`;

const BackButton = styled.div`
    width: 93px;
    height: 40px;
    background-color: #776BFF;
    border-radius: 200px;
    margin-right: 10px;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: transform 0.3s ease;  // 애니메이션 효과의 지속 시간과 함수를 설정

    &:hover {
        transform: scale(1.1);  // 호버 시 10% 크기 증가
    }
`;

const NextButton = styled.div`
    width: 93px;
    height: 40px;
    background-color: #776BFF;
    border-radius: 200px;
    margin-right: 44px;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: transform 0.3s ease;  // 애니메이션 효과의 지속 시간과 함수를 설정

    &:hover {
        transform: scale(1.1);  // 호버 시 10% 크기 증가
    }
`;

const HopeProjectMember = styled.input`
    width: 670px;
    height: 52px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #9DA1Ad;
    margin-bottom: 10px;
    border: 1px solid #E2E6EF;
    border-radius: 1px;
    padding-left: 14px;
    margin-bottom: 90px;

    background-color: #F4F6FA;
`;

const ProjectMainValue = styled.input`
    width: 670px;
    height: 52px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #9DA1AD;

    margin-bottom: 10px;
    border: 1px solid #E2E6EF;
    border-radius: 1px;
    padding-left: 14px;
    margin-bottom: 98px;

    background-color: #F4F6FA;
`;

const DropDownContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 90px;
    gap: 82px;
`;


const DateWrapper = styled.div` 
    display: flex;
    flex-direction: row;
    gap: 14px;
`;

const StyledAsterisk = styled.span`
    color: #776BFF; /* Change to your desired color */
`;