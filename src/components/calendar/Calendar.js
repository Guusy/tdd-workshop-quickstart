import React, { useState } from 'react';
import DatePicker from '../datepicker/DatePicker'
import { julMonthWeeks2018 } from './data'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [appliedDate, setAppliedDate] = useState("")
  const onDateClicked = (dateSelected) => {
    setSelectedDate(dateSelected)
  }
  const onApply = () => {
    setAppliedDate(`${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`)
  }
  return (
    <div className="calendar">
      <DatePicker
        weeks={julMonthWeeks2018}
        onDateClicked={onDateClicked}
        selectedDate={selectedDate}
        onApply={onApply}
      />
      <div >
        El dia seleccionado es : <span className="applied-date">
          {appliedDate}
        </span>
      </div>
    </div>
  );
}

export default Calendar;
