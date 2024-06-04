import React, { useState } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';
import TextAddButton from '../assets/images/textAdd.svg';
import ImageAddButton from '../assets/images/imageAdd.svg';

export default function ProjectBody() {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputContainers, setInputContainers] = useState([1]); // 초기 InputContainer 설정

    const handleBackButtonClick = () => {
        navigate('/create-project');
    };

    const handleNextButtonClick = () => {
        setModalIsOpen(true); // 모달 열기
    };

    const handleCloseModal = () => {
        setModalIsOpen(false); // 모달 닫기
    };

    const handleAddTextInput = () => {
        setInputContainers([...inputContainers, inputContainers.length + 1]); // 새로운 InputContainer 추가
    };

    return (
        <>
            <HomeNav />
            <BodyContainer>
                <ContentBody>
                    <BodyTitle>본문 <StyledAsterisk>*</StyledAsterisk></BodyTitle>
                    <InputContainer >
                        <SmallTextInput placeholder='프로젝트 개요' />
                        <BodyTextInput placeholder='' >
                            현대 사회에서 평균 수명이 늘어나면서 은퇴 후에도 경제 활동을 지속하고자 하는 50~60대 노인의 수가 증가하고 있습니다. 하지만, 법정 정년이 60세로 제한되어 있어 많은 노인들이 은퇴 후 일자리를 찾는 데 어려움을 겪고 있습니다. 이로 인해 노인 일자리 문제가 심각한 사회적 문제로 대두되고 있습니다. 특히, 오랜 기간 회사에 다닌 사람들은 본인의 직무에 대한 전문성과 경험이 있음에도 불구하고 은퇴 후 재취업이나 사업 시작에 있어 많은 제약을 받습니다. 이러한 배경에서 본 프로젝트는 은퇴 후 재취업을 원하는 노인들을 위해 성공적인 사업 시작 사례를 제공하고, 이를 통해 안정적인 경제 활동을 이어갈 수 있도록 돕고자 합니다.
                        </BodyTextInput>
                    </InputContainer>

                    <InputContainer >
                        <SmallTextInput placeholder='프로젝트 목표' />
                        <BodyTextInput placeholder='' >
                        본 프로젝트는 은퇴 후 사업을 시작하려는 50~60대 노인들에게 실질적인 도움이 되는 정보를 제공하는 것을 목표로 합니다. 이를 위해 트렌드에 둔감하고 사업 위험성이 큰 은퇴자들을 대상으로 성공적인 사업 사례를 모아 소개하는 웹사이트를 구축합니다. 이 웹사이트는 은퇴 후 성공적으로 사업을 시작한 사람들의 후기를 중심으로 구성되어, 사업 아이디어, 초기 자본 마련, 사업 운영 노하우 등 실질적인 정보를 제공합니다. 이를 통해 은퇴자들이 보다 자신감을 가지고 사업을 시작할 수 있도록 돕고, 궁극적으로 노인 일자리 문제를 해결하는 데 기여할 것입니다. 또한, 웹사이트는 사용자 친화적으로 설계되어 노인들도 쉽게 접근하고 활용할 수 있도록 할 예정입니다. 이로써 은퇴 후에도 활발히 경제 활동을 이어가며, 만족스러운 삶을 영위할 수 있는 환경을 조성하고자 합니다.
                        </BodyTextInput>
                    </InputContainer>

                    {inputContainers.map((_, index) => (
                        <InputContainer >
                            <SmallTextInput placeholder='추가 작성하기' />
                            <BodyRealTextInput placeholder=''/ >
                                
                        </InputContainer>
                    ))}
                    <AddContainer>
                        <TextAdd src={TextAddButton} alt="Text Add Button" onClick={handleAddTextInput} />
                        <ImageAdd src={ImageAddButton} alt="Image Add Button" />
                    </AddContainer>

                    <ButtonBox>
                        <BackButton onClick={handleBackButtonClick}>이전</BackButton>
                        <NextButton onClick={handleNextButtonClick}>등록</NextButton>
                    </ButtonBox>
                </ContentBody>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalContent>
                        축하해요! <br />
                        프로젝트가 성공적으로 등록되었습니다.
                    </ModalContent>
                    <CheckButton onClick={handleCloseModal}>확인</CheckButton>
                </Modal>
            </BodyContainer>
        </>
    );
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: '30px',
    },
};

const BodyContainer = styled.div`
    background-color: #F4F6FA;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 26px; // 상단 네비게이션 바 공간 확보
`;

const ContentBody = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FEFEFE;
    border-radius: 5px;
    padding-left: 84px;
    padding-top: 27px;
`;

const BodyTitle = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize26};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 56px;
`;

const SmallTextInput = styled.input`
    width: 800px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 1px;
    border: 1px solid #E2E6EF;
    background-color: #F4F6FA;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #9DA1AD;
    margin-bottom: 30px;

    padding-left: 14px;
    padding-right: 14px;
`;

const BodyTextInput = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #0F1011;
    padding-left: 14px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 14px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 800px;
    min-height: 100%;
    background-color: #F4F6FA;
    border: 1px solid #E2E6EF;
    margin-top: 10px;

    &::placeholder {
        text-align: left; /* 왼쪽 정렬 */
        font-size: 16px;   /* 폰트 크기 예시 */
    }

    white-space: pre-wrap;
`;

const ButtonBox = styled.div`
    width: 950px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 84px;
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

const ModalContent = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    text-align: center;
    margin-bottom: 20px;
`;

const CheckButton = styled.button`
    width: 93px;
    height: 40px;
    background-color: #776BFF;
    border: none;
    border-radius: 200px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    transition: transform 0.3s ease;  // 애니메이션 효과의 지속 시간과 함수를 설정

    &:hover {
        transform: scale(1.1);  // 호버 시 10% 크기 증가
    }
`;

const StyledAsterisk = styled.span`
    color: #776BFF; /* Change to your desired color */
`;

const AddContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 56px;
`;

const TextAdd = styled.img`
    width: 69px;
    height: 66px;
    margin-bottom: 30px;
    cursor: pointer; // 클릭 가능한 커서로 변경
`;

const ImageAdd = styled.img`
    width: 69px;
    height: 66px;
    margin-left: 13px;
    margin-bottom: 30px;
`;

const BodyRealTextInput = styled.input`
font-family: ${(props) => props.theme.fonts.primary};
font-weight: ${(props) => props.theme.fontWeights.medium};
font-size: ${(props) => props.theme.fontSizes.fontSize16};
line-height: ${(props) => props.theme.LineHeights.lineHeight};
color: #0F1011;
padding-left: 14px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 14px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 800px;
min-height: 100%;
background-color: #F4F6FA;
border: 1px solid #E2E6EF;
margin-top: 10px;

&::placeholder {
    text-align: left; /* 왼쪽 정렬 */
    font-size: 16px;   /* 폰트 크기 예시 */
}

white-space: pre-wrap;
`;