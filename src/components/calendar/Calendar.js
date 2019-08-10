import React, { useState } from 'react';
import DatePicker from '../datepicker/DatePicker'
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
    <div>
      <DatePicker
        weeks={[[{ day: 20, month: 2, year: 2018 }], [
          { day: 28, month: 2, year: 2018 }
        ]]}
        onDateClicked={onDateClicked}
        selectedDate={selectedDate}
        onApply={onApply}
      />
      <div >
        El dia seleccionado es :
        <span className="applied-date">
          {appliedDate}
        </span>
      </div>
    </div>
  );
}

export default Calendar;
