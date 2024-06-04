import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';
import CalendarImg from '../../assets/images/calendar.svg';

const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <DatePickerWrapper>
            <StyledDatePickerWrapper>
                <StyledDatePicker
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    selected={selectedDate}
                    onChange={handleChange}
                    placeholderText="날짜를 선택하세요"
                />
                <CalendarIcon src={CalendarImg} alt="Calendar Icon" />
            </StyledDatePickerWrapper>
        </DatePickerWrapper>
    );
};

export default DatePickerComponent;

// Styled Components
const DatePickerWrapper = styled.div`
    display: flex;
    width: 190px;
    align-items: center;
    position: relative;
`;

const StyledDatePickerWrapper = styled.div`
    display: flex;
    padding: 6px 16px 6px 0px;
    align-items: center;
    position: relative;
    width: 100%;
`;

const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    padding: 6px 16px 6px 9px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const CalendarIcon = styled.img`
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
    pointer-events: none;
`;
