import React from 'react';
import { Card } from 'react-bootstrap';

function CurrentWeather({ weather, city }) {
  const minTemp = parseInt(weather.min_temp);
  const maxTemp = parseInt(weather.high_temp);
  const temp = parseInt(weather.temp);
  const day = new Date(weather.valid_date);
  const dayName = day.toLocaleString('en-US', { weekday: 'long' });
  const weatherDate = day.toLocaleDateString('en-US');
  const weatherStatus = weather.weather.description;
  const weatherIcon = weather.weather.icon;
  const humidity = weather.rh;
  const wind_spd = weather.wind_spd;
  const pressure = weather.pres;
  const precipitation = weather.pop;

  if(!city) return '';

  return (
    <Card className='current-weather'>
      <Card.Body className='mt-2'>
        <Card.Subtitle className="mb-1 text-muted text-center">CURRENT WEATHER</Card.Subtitle>
        <Card.Title className='text-center mb-0 pb-0'>{`${city} ${weatherDate} ${dayName}`}</Card.Title>
        <div className='row'>
          <div className='col-4 my-auto'>
            <img src={`${process.env.REACT_APP_WEATHERBIT_API_ICON_URL}${weatherIcon}.png`} alt={weatherStatus} width={175} />
          </div>
          <div className='col-4 m-auto text-center text-truncate'>
            <span className='fs-5 fw-700 text-uppercase text-truncate'>{weatherStatus}</span>
            <br />
            <span className='fs-1'>{temp}°C</span>
            <br />
            <span className='fw-700'>MIN {minTemp}°C - MAX {maxTemp}°C</span>
          </div>
          <div className='col m-auto ms-3 d-none d-md-block'>
            <div className='mb-1'>Winds {wind_spd} m/s</div>
            <div className='mb-1 text-info'>Pressure {pressure} mb</div>
            <div className='mb-1'>Humidity {humidity} %s</div>
            <div className='text-info' title='Probability of Precipitation '>Precipitation {precipitation} %</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CurrentWeather;