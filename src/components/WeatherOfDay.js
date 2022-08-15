import React from 'react';
import { Card } from 'react-bootstrap';

function WeatherOfDay({ weather, city }) {
    const minTemp = parseInt(weather.min_temp);
    const maxTemp = parseInt(weather.high_temp);
    const temp = parseInt(weather.temp);
    const day = new Date(weather.valid_date);
    const dayShortName = day.toLocaleString('en-US', { weekday: 'long' });
    const weatherDate = day.toLocaleDateString('en-US');
    const weatherStatus = weather.weather.description;
    const weatherIcon = weather.weather.icon;

    return (
        <Card className='weather-of-day p-0 m-2 col-6 col-sm-6 col-md-4'>
            <Card.Body className='m-0 p-0 pe-2 mt-1'>
                <Card.Subtitle className="text-muted text-center">{weatherDate}</Card.Subtitle>
                <Card.Title className='text-center'>{dayShortName}</Card.Title>
                <div className='card-text m-0'>
                    <div className='weather-image m-0'><img src={`${process.env.REACT_APP_WEATHERBIT_API_ICON_URL}${weatherIcon}.png`} alt="{weatherStatus}" width={105} /><span className='fs-3'>{temp}°C</span></div>
                    <div className='fs-4 fw-500 text-center text-truncate m-0'>{weatherStatus}</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='min-temp rounded'>MIN<br />{minTemp}°C</div>
                    <div className='max-temp rounded'>MAX<br />{maxTemp}°C</div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default WeatherOfDay;