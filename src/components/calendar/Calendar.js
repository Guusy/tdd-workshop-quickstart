import React, { useState } from 'react';
import DatePicker from '../datepicker/DatePicker'
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const onDateClicked = (dateSelected) => {
    setSelectedDate(dateSelected)
  }
  return (
    <div>
      <DatePicker
        weeks={[[{ day: 20, month: 2, year: 2018 }], [
          { day: 28, month: 2, year: 2018 }
        ]]}
        onDateClicked={onDateClicked}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default Calendar;
