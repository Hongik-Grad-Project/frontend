import styled from 'styled-components';

export const BasicInformBox = styled.div`
    width: 358px;
    height: 636px;
    flex-shrink: 0;

    border-radius: 10px;
    background: ${(props)=>props.theme.colors.greyscale00};
    box-shadow: 0px 0px 20px 0px rgba(65, 76, 97, 0.07);

    position: relative;
`;

export const BasicInformWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 29px;

    width: 297px;
    height: 514px;

    position: absolute;
    top: 41px;
    left: 27.5px;
`;

export const BasicInformTitle = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.subtitle16SemiBold};
    color: ${(props) => props.theme.colors.greyscale90};
`;

export const TextInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 19px;
`;

export const MarketingAgreementBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    width: 297px;
    height: 20px;
`;

export const MarketingAgreementCheckBox = styled.img`
    width: 13px;
    height: 13px;
`;

export const MarketingAgreementText = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.caption12Medium};
    color: ${(props) => props.theme.colors.greyscale60};
    line-height: ${(props) => props.theme.LineHeights.caption12Medium};
`;

export const StartButton = styled.button`
    display: flex;
    width: 147px;
    height: 38px;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: none;
    cursor: pointer;

    background-color: ${(props) => props.disabled ? props.theme.colors.keyblue20 : props.theme.colors.keyblue40};
    transition: background-color 0.3s, color 0.3s;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: ${(props) => props.theme.fontSizes.caption12Medium};
    color: ${(props) => props.theme.colors.greyscale00};

    position: absolute;
    bottom: 17px;
    right: 17px;
`;