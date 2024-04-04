"use client"; 
import { useEffect, useState } from "react";
import Weather from "./weather"

export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [currWeather, setCurrWeather] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=54.6269&lon=39.6916&lang=ru&units=metric&cnt=36&appid=b2cd2a85c05bd49375ec7a150a1b7dfd");
      const data = await response.json();
      const formattedData = formatWeatherData(data.list);
      setWeatherData(formattedData);
    };
    const fetchCurrentWeather = async () => {
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=54.6269&lon=39.6916&lang=ru&units=metric&cnt=5&appid=b2cd2a85c05bd49375ec7a150a1b7dfd");
      const data = await response.json();
      const formattedData = formatWeatherData(data);
      setCurrWeather(formattedData);
    }
    fetchWeatherData();
    fetchCurrentWeather();
  }, []);

  const formatWeatherData = (data) => {
    if(Array.isArray(data))
      return data.filter((e) => e.dt_txt.includes("18:00:00")).map(item => ({
        date: new Date(item.dt*1000).toLocaleString('ru', {weekday: 'long'}),
        temp: item.main.temp,
        description: item.weather[0].description
      }));
    return {
      date: new Date(data.dt*1000).toLocaleString('ru', {weekday: 'long'}),
      temp: data.main?.temp,
      description: data.weather[0].description
    }
  };  

  return (
    <div className="flex flex-row justify-center gap-24 px-48 py-4">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-lg">Погода на 5 дней в Рязани</h1>
        <div className="weather-container flex flex-col gap-2">
          {weatherData.map((day, index) => (
            <Weather key={index} day={day} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-lg">Текущая погода в Рязани</h1>
        {currWeather.date && <Weather day={currWeather} />}
      </div>  
    </div>
  )
}
