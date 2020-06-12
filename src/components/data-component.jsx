import React from 'react';
import './data.styles.scss';

const Data = () => {
  const generateData = () => {
    const data = {
      day: 12,
      weekday: 'Tuesday',
      month: 'Jun',
      year: "2020"
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
