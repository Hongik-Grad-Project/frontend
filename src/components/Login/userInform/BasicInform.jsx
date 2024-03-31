import React, { useState, useEffect, useRef } from 'react';
import { BasicInformBox, BasicInformWrapper, BasicInformTitle, TextInputWrapper, MarketingAgreementBox, MarketingAgreementCheckBox, MarketingAgreementText, StartButton } from '../../../styles/User/BasicInformStyles';
import InputProperty from '../../Input/InputProperty';
import CheckOffBox from '../../../assets/images/CheckBox/CheckOff.svg';
import CheckOnBox from "../../../assets/images/CheckBox/CheckOn.svg";

const BasicInform = () => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [major, setMajor] = useState('');
    const [job, setJob] = useState('');
    const [teamBuildingStep, setTeamBuildingStep] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isStartButtonActive, setIsStartButtonActive] = useState(false);
    const mounted = useRef(false);
    // 체크박스 상태를 토글하는 함수

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const areAllFieldsFilled = () => userName && phoneNumber && major && job && teamBuildingStep && isChecked;
        // 컴포넌트가 처음 마운트될 때는 isStartButtonActive 상태를 변경하지 않고,
        // 그 이후의 렌더링에서만 areAllFieldsFilled() 결과에 따라 상태를 업데이트합니다.
        if (mounted.current) {
            setIsStartButtonActive(areAllFieldsFilled());
        } else {
            mounted.current = true;
        }
    }, [userName, phoneNumber, major, job, teamBuildingStep, isChecked]);

    return (
        <BasicInformBox>
            <BasicInformWrapper>
                <BasicInformTitle>기본 정보 입력</BasicInformTitle>
                <TextInputWrapper>
                    <InputProperty title="성함" content="성함을 입력하세요" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <InputProperty title="연락처" content="연락처를 입력하세요" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <InputProperty title="전공" content="전공을 입력하세요" value={major} onChange={(e) => setMajor(e.target.value)} />
                    <InputProperty title="직무" content="직무를 입력하세요" value={job} onChange={(e) => setJob(e.target.value)} />
                    <InputProperty title="희망 팀빌딩 단계" content="희망 팀빌딩 단계를 입력하세요" value={teamBuildingStep} onChange={(e) => setTeamBuildingStep(e.target.value)} />
                    <MarketingAgreementBox onClick={handleCheckboxClick}>
                        <MarketingAgreementCheckBox src={isChecked ? CheckOnBox : CheckOffBox} alt="checkbox" />
                        <MarketingAgreementText>
                            마케팅 정보 수신 동의
                        </MarketingAgreementText>
                    </MarketingAgreementBox>
                </TextInputWrapper>
            </BasicInformWrapper>
            <StartButton disabled={!isStartButtonActive}>시작하기</StartButton>
        </BasicInformBox>
    );
}

export default BasicInform;
