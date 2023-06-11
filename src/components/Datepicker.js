import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";

function Datepicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return ( <DatePicker dateFormat="yyyy년 MM월 dd일"
                         selected={selectedDate}
                         locale={ko}
                         onChange={handleDateChange}
                         placeholderText="시작 날짜 선택"
        />
    );
}

export default Datepicker;