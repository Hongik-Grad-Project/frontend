import React, { useState } from 'react';
import styled from 'styled-components';
import CircleXImg from '../../assets/images/InputBox/circleX.svg';

const InputProperty = ({ title, content, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleReset = () => {
        onChange(''); // `onChange`를 호출하여 `value`를 초기화합니다.
    }

    return (
        <InputPropertyBox>
            <BoxTitle>{title}</BoxTitle>
            <BoxContent>
                <BoxContentInput
                    type="text"
                    value={value}               // `value`를 직접 사용
                    onChange={onChange}         // 상위 컴포넌트에서 전달받은 `onChange`를 직접 사용
                    placeholder={content}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {value && isFocused && (
                    <ResetButton onClick={handleReset} aria-label="reset">
                        <img src={CircleXImg} alt="reset" />
                    </ResetButton>
                )}
            </BoxContent>
        </InputPropertyBox>
    );
};

export default InputProperty;

export const InputPropertyBox = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    height: 70px;
`;

export const BoxTitle = styled.div`
    color: ${(props) => props.theme.colors.greyscale90};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.fontSizes.body14SemiBold};

    font-weight: ${(props) => props.theme.fontWeights.semibold};
    line-height: ${(props) => props.theme.LineHeights.body14SemiBold};
`;

export const BoxContent = styled.div`
    width: 296px;
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;
`;

export const BoxContentInput = styled.input`
    width: 296px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 0 0 14px;

    border: 1px solid ${(props) => props.isFocused || props.hasValue ? props.theme.colors.greyscale90 : props.theme.colors.greyscale30};
    border-radius: 7px;

    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.fontSizes.caption12Medium};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    line-height: ${(props) => props.theme.LineHeights.caption12Medium};
    color: ${(props) => props.theme.colors.greyscale90};

    /* 추가적인 포커스 스타일 */
    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.greyscale90}; /* 포커스 상태일 때 색상 */
    }
`;

export const ResetImage = styled.img`
    position: absolute;
    right: 14px;
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

const ResetButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 14px;
    width: 16px;
    height: 16px;
    cursor: pointer;
`;