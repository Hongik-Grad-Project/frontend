import React, { useState } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import chatSendImg from '../assets/images/chatSend.svg';
import { useNavigate } from 'react-router';

export default function AuroraChat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChatFinishClick = () => {
        navigate('/chat/summary');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
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
    white-space: pre-wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 26px; // 상단 네비게이션 바 공간 확보

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize22};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
`;

const ChatWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    height: calc(100vh - 80px - 120px); // 80px은 네비게이션 바 높이, 26px은 padding-top
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #FFFFFF;
    margin-top: 12px;
    border-radius: 10px;
`;

const MessageContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    overflow-y: auto;
`;

const MessageBubble = styled.div`
    background-color: ${(props) => (props.$sender === 'user' ? '#776BFF' : '#FFFFFF')};
    border: 1px solid ${(props) => (props.$sender === 'user' ? '#A6E87E' : '#DDDDDD')};
    border-radius: 15px;
    padding: 10px;
    margin: 5px 0;
    max-width: 80%;
    align-self: ${(props) => (props.$sender === 'user' ? 'flex-end' : 'flex-start')};

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => (props.$sender === 'user' ? '#FEFEFE' : '#000000')};
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 615px; /* InputBox와 같은 너비 */
    height: 45px;
    flex-shrink: 0;
`;

const InputBox = styled.input`
    border-radius: 10px;
    border: 0.5px solid #0F1011;
    
    width: 596px;
    height: 45px;
    display: flex;
    align-items: center;
    background-color: #FEFEFE;

    margin-right: 9px;

    padding-left: 19px;
`;

const ChatEndButton = styled.button`
    padding: 9px 0px 0px 0px;
    background-color: #E2E6EF;

    width: 149px;
    height: 48px;

    display: flex;
    justify-content: center;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.fontSize20};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};
    
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.keyPurple};
    }

    margin-left: 9px;
`;

const SendButton = styled.button`
    position: absolute;
    right: 14px;
    top: 24px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
`;
