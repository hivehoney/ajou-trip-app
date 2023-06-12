import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";
import "../assets/css/custom.scss";
import {addDays, addMonths, differenceInDays, startOfToday} from 'date-fns';

function Datepicker({ handleStartDateChange  }) {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const handleChange = (date) => {
        setSelectedStartDate(date);
        handleStartDateChange(date); // 선택한 시작 날짜를 부모 컴포넌트로 전달
    };

    const handleEndDateChange = (date) => {
        if (selectedStartDate && differenceInDays(date, selectedStartDate) > 5) {
            setSelectedEndDate(addDays(selectedStartDate, 5));
        } else {
            setSelectedEndDate(date);
        }
    };

    const minDate = startOfToday();
    const maxDate = addMonths(new Date(), 1); // 현재 날짜로부터 1달 후를 최대 날짜로 설정

    return (
        <>
            <div className="date-picker-container">
            <DatePicker
                className="datepicker"
                dateFormat="yyyy년 MM월 dd일"
                selected={selectedStartDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={selectedStartDate}
                endDate={selectedEndDate}
                locale={ko}
                placeholderText="시작 날짜 선택"
                minDate={minDate}
                maxDate={maxDate}
            />
            </div>
        </>
    );
}

export default Datepicker;