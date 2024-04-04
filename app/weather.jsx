import React from 'react';

const WeatherDay = ({ day }) => {
  let date = day.date[0].toUpperCase() + day.date.slice(1);
  return (
    <div className="gap-x-4 weather-day border-b border-black p-2 flex items-center">
      <div className="flex min-w-28 font-medium">{date}</div>
      <div className="flex justify-center min-w-48 font-light">{day.description}</div>
      <div className="flex justify-center min-w-28 font-medium">{day.temp} °C</div>
    </div>
  );
};

export default WeatherDay;
