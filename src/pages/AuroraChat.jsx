import styled from 'styled-components';
import HomeNav from '../components/Home/HomeNav';
import chatSendImg from '../assets/images/chatSend.svg';

export default function AuroraChat() {
    return (
        <>
            <HomeNav />
            <ChatContainer>
                사회문제를 어떻게 해결해야 좋을지 잘 모르겠나요? <br />
                오로라 AI와 이야기 해보세요? 아이디어가 구체화 될 거에요.
                <ChatWrapper>
                    <MessageContainer>
                        {/* 여기에 채팅 메시지를 동적으로 추가 */}
                    </MessageContainer>
                    <InputContainer>
                        <InputWrapper>
                            <InputBox placeholder="Message ChatGPT" />
                            <SendButton>
                                <img src={chatSendImg} alt="Send" />
                            </SendButton>
                        </InputWrapper>
                        <ChatEndButton>대화 끝내기</ChatEndButton>
                    </InputContainer>
                </ChatWrapper>
            </ChatContainer>
        </>
    );
}

const ChatContainer = styled.div`
    background-color: #FAFAFA;
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
    max-width: 800px;
    height: calc(100vh - 80px - 120px); // 80px은 네비게이션 바 높이, 26px은 padding-top
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
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