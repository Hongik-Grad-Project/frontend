import styled from 'styled-components';

export default function HomeContent() {
    return (
        <HomeContentContainer>
            <LeftContainer>
                {/* 마감임박 프로젝트 */}
                <DeadlineProjectContainer>

                </DeadlineProjectContainer>
                {/* 가장 많이 기부 중인 모금함 */}
                <DonatedProjectContainer>
                    
                </DonatedProjectContainer>
                {/* 지난 프로젝트 후기 */}
                <PastProjectContainer>

                </PastProjectContainer>
            </LeftContainer>
            <RightContainer>
                <OurChangeContainer>
                
                </OurChangeContainer>
                <BlankContainer>
                
                </BlankContainer>
            </RightContainer>
        </HomeContentContainer>
    );
}

const HomeContentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 66px;
`;

const LeftContainer = styled.div`
    width: 771px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const RightContainer = styled.div`
    width: 395px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const DeadlineProjectContainer = styled.div`
    width: 771px;
    height: 331px;
    background-color: #D9D9D9;
    border-radius: 12px;
    margin-top: 25px;
`;

const DonatedProjectContainer = styled.div`
    width: 771px;
    height: 331px;
    background-color: #D9D9D9;
    border-radius: 12px;
    margin-top: 31px;
`;

const PastProjectContainer = styled.div`
    width: 771px;
    height: 331px;
    background-color: #D9D9D9;
    border-radius: 12px;
    margin-top: 31px;
`;

const OurChangeContainer = styled.div`
    width: 395px;
    height: 583px;
    background-color: #D9D9D9;
    border-radius: 12px;
    margin-top: 25px;
`;

const BlankContainer = styled.div`
    width: 395px;
    height: 500px;
    background-color: #D9D9D9;
    border-radius: 12px;
    margin-top: 32px;
`;