import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import chatSendImg from '../assets/images/chatSend.svg';
import { useNavigate } from 'react-router';

export default function AuroraChat() {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const messageContainerRef = useRef(null);

    const predefinedConversation = [
        { user: "안녕 나는 사회문제 해결에 관심이 있어", ai: "네, 안녕하세요. 무슨 사회문제를 해결하고 싶으신가요?" },
        { user: "요즘 노인 일자리 문제가 심각한 것 같아", ai: "노인 일자리 문제가 어떻게 심각한가요?" },
        { user: "평균 수명이 늘어나서 은퇴 후에도 일하고 싶은 노인들이 많은데, 일자리가 없는 것 같아.", ai: "그렇군요. 일자리가 왜 없을까요?" },
        { user: "한국은 법정 정년이 60세로 제한되어 있어", ai: "모든 노인이 60세로 제한되나요?" },
        { user: "그건 아니야. 전문직 종사자들이나 개인 사업자는 정년을 넘어서 원하는 만큼 일 할 수 있어. 회사에 다니는 사람만 문제인 것 같아.", ai: "회사에 다니는 사람은 은퇴 후 뭘 하고 싶어 하나요?" },
        { user: "그러면 본인 직무로 재취업을 원하는 사람 vs 다른 직무로 재취업을 원하는 사람 vs 자기 사업 시작 이렇게 나눌 수 있을 것 같아.", ai: "그중에서도 어떤 사람을 돕고 싶은가요?" },
        { user: "본인 직무로 재취업을 원하는 사람은 스카웃을 당해서 가는 경우가 많고, 다른 직무로 재취업을 원하는 사람도 잡코리아를 통해 갈 수 있을거라고 생각해 자기 사업을 시작하려는 사람을 돕고 싶어", ai: "어떻게 돕고 싶은가요?" },
        { user: "아무래도 나이가 있다보니 최신 동향에 대해 무지할 수 있고 청년 창업보다 위험 부담이 크다고 생각해. 그래서 은퇴 후 사업을 시작한 후 성공한 후기를 모아볼 수 있는 사이트가 있었으면 좋겠어", ai: "..." }
    ];

    const [conversationIndex, setConversationIndex] = useState(0);

    useEffect(() => {
        if (conversationIndex < predefinedConversation.length) {
            const { user, ai } = predefinedConversation[conversationIndex];
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { text: user, sender: 'user' }]);
                setTimeout(() => {
                    setMessages(prevMessages => [...prevMessages, { text: ai, sender: 'ai' }]);
                    setConversationIndex(prevIndex => prevIndex + 1);
                }, 1000); // 1 second delay for AI response
            }, 1000); // 1 second delay for user input
        }
    }, [conversationIndex]);

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleChatFinishClick = () => {
        navigate('/chat/summary');
    };

    return (
        <>
            <HomeNav />
            <ChatContainer>
                사회문제를 어떻게 해결해야 좋을지 잘 모르겠나요? <br />
                오로라 AI와 이야기 해보세요? 아이디어가 구체화 될 거에요.
                <ChatWrapper>
                    <MessageContainer ref={messageContainerRef}>
                        {messages.map((message, index) => (
                            <MessageBubble key={index} $sender={message.sender}>
                                {message.text}
                            </MessageBubble>
                        ))}
                    </MessageContainer>
                    <InputContainer>
                        <InputWrapper>
                            <InputBox placeholder="Message ChatGPT"/>
                            <SendButton>
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
    padding: 25px 26px 20px 26px; // 하단 패딩을 조정하여 입력창과의 간격 설정

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    font-size: ${(props) => props.theme.fontSizes.fontSize22};
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    color: ${(props) => props.theme.colors.black};

    height: 100%;
`;

const ChatWrapper = styled.div`
    width: 90%;
    max-width: 1100px;
    min-height: 200px; // 최소 높이 설정
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
    height: 100%;
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
