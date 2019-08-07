import React from 'react';

const DatePicker = (props) => {
  const { weeks, onDateClicked, selectedDate } = props;
  return (
    <table>
      <tbody>
        {weeks.map((week) => <tr className="date-picker__week">
          {week.map(
            (date) => {
              const { day, month, year } = date
              let classNameDate = ""
              if (selectedDate && selectedDate.day === day
                && selectedDate.month === month
                && selectedDate.year === year
              ) {
                classNameDate = "date--selected"
              }
              return (
                <td id={`date-${day}-${month}-${year}`}
                  onClick={() => onDateClicked(date)}
                  className={classNameDate}
                >{day}</td>)
            })
          }
        </tr>)}
      </tbody>
    </table>
  );
}

export default DatePicker;
