import React from 'react';
import { useSelector } from 'react-redux';
import { 
  selectCityWeatherData, 
  selectError, 
  selectIsLoading } from '../redux/weatherSlice';
import Loading from './Loading';
import Error from './Error';
import WeatherOfDay from './WeatherOfDay';
import CurrentWeather from './CurrentWeather';

function Content() {
  const cityWeatherData = useSelector(selectCityWeatherData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const forecast = cityWeatherData.data ? cityWeatherData.data.slice(1, 7) : [];
  
  return (
    <>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      { !isLoading && !error && cityWeatherData.data  && <CurrentWeather weather={cityWeatherData.data[0]} city={cityWeatherData.city_name}/>}
      <div className='list-weather-of-days row d-flex justify-content-center'>
        {!isLoading && !error && cityWeatherData.data  &&         
          forecast.map((weather, key) => <WeatherOfDay key={key} weather={weather} city={cityWeatherData.city_name} />)
        }
      </div>
    </>
  )
}

export default Content;