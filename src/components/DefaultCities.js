import React from 'react';
import { useDispatch } from 'react-redux';
import { getCityWeather } from '../redux/weatherSlice';

function DefaultCities() {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        const cityData = {
            ankara: { name: "Ankara", latitude: "39.93", longitude: "32.85" },
            istanbul: {  name: "İstanbul", latitude: 41.01, longitude: 28.9603 },
            kocaeli: { name: "Kocaeli", latitude: 40.7656, longitude: 29.9406 },
            izmir: { name: "İzmir", latitude: 38.4127, longitude: 27.1384, },
            kayseri: { name: "Kayseri", latitude: 38.7333, longitude: 35.4833, },
            gumushane: { name: "Gümüşhane", latitude: 40.4597, longitude: 39.4778, },
            bursa: { name: "Bursa", latitude: 40.1833, longitude: 29.0667, },
            diyarbakir: { name: "Diyarbakır", latitude: 37.9108, longitude: 40.2367, },
        }
        const city = cityData[e.target.getAttribute('data-city')];
        dispatch(getCityWeather(city))
        console.log(e.target.getAttribute('data-city'))
    }
    return (
        <div className='mt-3 p-3 bg-light w-100 shadow d-flex justify-content-between'>
            <button className='btn btn-outline-success' data-city="ankara" onClick={(e) => handleClick(e)}>Ankara</button>
            <button className='btn btn-outline-success' data-city="istanbul" onClick={(e) => handleClick(e)}>İstanbul</button>
            <button className='btn btn-outline-success' data-city="kocaeli" onClick={(e) => handleClick(e)}>Kocaeli</button>
            <button className='btn btn-outline-success' data-city="izmir" onClick={(e) => handleClick(e)}>İzmir</button>
            <button className='btn btn-outline-success' data-city="bursa" onClick={(e) => handleClick(e)}>Bursa</button>
            <button className="d-none d-sm-inline btn btn-outline-success" data-city="kayseri" onClick={(e) => handleClick(e)}>Kayseri</button>
            <button className="d-none d-sm-inline btn btn-outline-success" data-city="gumushane" onClick={(e) => handleClick(e)}>Gümüşhane</button>
            <button className="d-none d-md-inline btn btn-outline-success" data-city="diyarbakir" onClick={(e) => handleClick(e)}>Diyarbakır</button>
        </div>
    );
}

export default DefaultCities;