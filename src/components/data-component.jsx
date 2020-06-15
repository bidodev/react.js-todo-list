import React from 'react';
import './data.styles.scss';

const Data = () => {
  const generateData = () => {
    const weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentDate = new Date();
    const data = {
      day: currentDate.getDate(),
      weekday: weekDays[currentDate.getDay()],
      month: monthNames[currentDate.getMonth()],
      year: currentDate.getFullYear(),
    };
    return data;
  };
  const { day, weekday, month, year } = generateData();

  return (
    <div className="header-data">
      <div className="header-day">{day}</div>
      <div className="header-month">
        {month}
        <span>{year}</span>
      </div>
      <div className="header-week-day">{weekday}</div>
    </div>
  );
};

export default Data;
