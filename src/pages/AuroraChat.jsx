import React, { useState } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import chatSendImg from '../assets/images/chatSend.svg';
import { useNavigate } from 'react-router';

export default function AuroraChat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    // 미리 정의된 응답들
    const predefinedResponses = [
        "네, 안녕하세요. 무슨 사회문제를 해결하고 싶으신가요?",
        "노인 일자리 문제가 어떻게 심각한가요?",
        "그렇군요, 일자리가 왜 없을까요?",
        "모든 노인이 60세로 제한되나요?",
        "회사에 다니는 사람은 은퇴 후 뭘 하고 싶어 하나요?",
        "그중에서도 어떤 사람을 돕고 싶은가요?",
        "어떻게 돕고 싶은가요?"
    ];
    const [responseIndex, setResponseIndex] = useState(0);

    const handleChatFinishClick = () => {
        navigate('/chat/summary');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            // 사용자의 메시지를 먼저 저장
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
    
            // 5초의 지연 후에 AI 응답 추가
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: predefinedResponses[responseIndex], sender: 'ai' }
                ]);
                // 다음 응답을 위해 인덱스 업데이트
                if (responseIndex < predefinedResponses.length - 1) {
                    setResponseIndex(responseIndex + 1);
                }
            }, 5000); // 5000ms = 5초 지연
        }
    };
    
    

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSendClick(event);
        }
    };

    return (
        <>
            <HomeNav />
            <ChatContainer>
                사회문제를 어떻게 해결해야 좋을지 잘 모르겠나요? <br />
                오로라 AI와 이야기 해보세요? 아이디어가 구체화 될 거에요.
                <ChatWrapper>
                    <MessageContainer>
                        {messages.map((message, index) => (
                            <MessageBubble key={index} $sender={message.sender}>
                                {message.text}
                            </MessageBubble>
                        ))}
                    </MessageContainer>
                    <InputContainer>
                        <InputWrapper>
                            <InputBox
                                placeholder="Message ChatGPT"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                            />
                            <SendButton onClick={handleSendClick}>
                                <img src={chatSendImg} alt="Send" />
                            </SendButton>
                        </InputWrapper>
                        <ChatEndButton onClick={handleChatFinishClick}>
                            대화 끝내기
                        </ChatEndButton>
                    </InputContainer>
                </ChatWrapper>
            </ChatContainer>
        </>
    );
}



const ChatContainer = styled.div`
    background-color: #F4F6FA;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 26px 20px 26px; // 하단 패딩을 조정하여 입력창과의 간격 설정

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize22};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;

const ChatWrapper = styled.div`
    width: 90%;
    max-width: 1100px;
    min-height: 200px; // 최소 높이 설정
    max-height: calc(100vh - 220px); // 최대 높이 조정
    overflow-y: auto; // 내용이 많을 경우 스크롤
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #FFFFFF;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const MessageContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    overflow-y: auto;
    padding: 10px 0;
`;

const MessageBubble = styled.div`
    background-color: ${props => (props.$sender === 'user' ? '#776BFF' : '#E2E6EF')};
    border-radius: 14px;
    padding: 13px 19px 13px 19px;
    max-width: 75%;
    align-self: ${props => (props.$sender === 'user' ? 'flex-end' : 'flex-start')};

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize16};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${props => (props.$sender === 'user' ? '#FEFEFE' : '#0F1011')};
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%; // InputWrapper의 너비를 100%로 설정하여 전체를 차지하도록 함
    max-width: 950px; // 최대 너비를 설정하여 다른 요소와 함ꏐ 배치가 가능하도록 함
    height: 42px;
    display: flex; // flex 속성 추가
    align-items: center; // 세로 중앙 정렬
`;

const InputBox = styled.input`
    width: 100%;  // 너비를 100%로 설정하여 부모 컨테이너의 전체 너비를 차지하게 함
    border-radius: 22px;
    border: 2px solid #007BFF;
    padding: 12px 20px;
    font-size: 16px;
    margin-top: 9px;
`;

const SendButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 5px;
    margin-top: 10px;
`;

const ChatEndButton = styled.button`
    background-color: #E2E6EF;

    width: 149px;
    height: 48px;
    
    padding: 9px 28px 9px 28px;
    border-radius: 200px;
    
    border: none;
    cursor: pointer;
    margin-left: auto;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

    &:hover {
        background-color: #776BFF; // 호버 시 배경 색상 변경
        color: #FEFEFE; // 호버 시 글자 색상 변경
    }
`;

