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

                    {inputContainers.map((_, index) => (
                        <InputContainer key={index}>
                            <SmallTextInput placeholder='소제목' />
                            <BodyTextInput placeholder='단락' />
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
`;

const BodyTextInput = styled.input`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: #9DA1AD;
    padding-left: 14px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 800px;
    min-height: 200px;
    background-color: #F4F6FA;
    border: 1px solid #E2E6EF;
    margin-top: 10px;

    &::placeholder {
        text-align: left; /* 왼쪽 정렬 */
        font-size: 16px;   /* 폰트 크기 예시 */
    }
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
