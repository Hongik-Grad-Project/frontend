import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <DateRangePickerWrapper>
            <StyledDatePicker 
                selectsRange={true}
                locale={ko}
                dateFormat="yyyy년 MM월 dd일"
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={handleChange}
            />
        </DateRangePickerWrapper>
    );
};

export default DateRangePicker;

const DateRangePickerWrapper = styled.div`
    /* Wrapper 스타일 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;

const StyledDatePicker = styled(DatePicker)`
    /* DatePicker 스타일 */
    width: 280px;
    height: 33px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;

    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.fontSize14};
    color: #4E525C;
    line-height: ${(props) => props.theme.LineHeights.lineHeight};
    
    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__input-container {
        width: 100%;
    }

    .react-datepicker__input-container input {
        width: 100%;
        border: none;
        text-align: center;
    }

    .react-datepicker__day--selected {
        background-color: #007bff;
        color: white;
    }

    .react-datepicker__day--in-range {
        background-color: #007bff;
        color: white;
    }

    .react-datepicker__header {
        background-color: #f0f0f0;
    }
`;
