import React from 'react';

const WeatherDay = ({ day }) => {
  let date = day.date[0].toUpperCase() + day.date.slice(1);
  return (
    <div className="weather-day rounded border border-black p-2 flex items-center flex-col">
      <h2>{date}</h2>
      <p>Температура: {day.temp} °C</p>
      <p>Описание: {day.description}</p>
      <i className={day.img} />
    </div>
  );
};

export default WeatherDay;
