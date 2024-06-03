import React, { useState } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';

export default function ProjectBody() {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleBackButtonClick = () => {
        navigate('/create-project');
    };

    const handleNextButtonClick = () => {
        setModalIsOpen(true); // 모달 열기
    };

    const handleCloseModal = () => {
        setModalIsOpen(false); // 모달 닫기
    };

    return (
        <>
            <HomeNav />
            <BodyContainer>
                <ContentBody>
                    <BodyTitle>본문</BodyTitle>

                    <InputContainer>
                        <SmallTextInput placeholder='소제목: 첫 문장이 가장 중요! 계속 읽고 싶게 쓰기' />
                        <BodyTextInput placeholder='본문: 이 내용을 모르는 사람도 공감할 수 있게' />
                    </InputContainer>

                    <InputContainer>
                        <SmallTextInput placeholder='소제목' />
                        <BodyTextInput placeholder='본문' />
                    </InputContainer>

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
    justify-content: center;
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
`;

const BodyTextInput = styled.input`
    width: 800px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 1px;
    border: 1px solid #E2E6EF;
    background-color: #F4F6FA;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #9DA1AD;
    margin-bottom: 30px;
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
`;
