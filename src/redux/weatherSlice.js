import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCities = createAsyncThunk('city/getAsyncCityNames', async(query) => {
    const headers = { 'X-Api-Key': process.env.REACT_APP_NINJAS_API_KEY};
    const res = await axios(`${process.env.REACT_APP_NINJAS_CITY_API_END_POINT}city?name=${query}&limit=1`, { headers });
    console.log(res.data)
    return res.data;
});

export const getCityWeather = createAsyncThunk('weather/getAsyncCityWeather', async (city) => {
    const query = `${process.env.REACT_APP_WEATHERBIT_API_URL}forecast/daily?lat=${city.latitude}&lon=${city.longitude}&lang=en&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`;
    const res = await axios(query);
    return res.data;
});

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        currentCity: { name: "Kocaeli", latitude: 40.7656, longitude: 29.9406 },
        cityWeatherData: [],
        isLoading: false,
        error: '',
    },
    reducers: {
        setCurrentCity: (state, action) => {
            state.currentCity = action.payload;
        }
    },
    extraReducers: {
        [getCityWeather.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCityWeather.fulfilled]: (state, action) => {
            if(action.payload) state.cityWeatherData = action.payload;
            else state.cityCurrentWeatherData = {};
            state.isLoading = false;
        },
        [getCityWeather.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
        [getCities.pending]: (state, action) => {
            // state.isLoading = true;
        },
        [getCities.fulfilled]: (state, action) => {
            state.currentCity = action.payload[0];
            state.isLoading = false;
            state.error = '';
        },
        [getCities.rejected]: (state, action) => {
            state.error = action.payload.error.message;
            state.isLoading = false;
        }
    }
});

export const selectCity = state => state.weather.currentCity;
export const selectIsLoading = state => state.weather.isLoading;
export const selectError = state => state.weather.error;
export const selectCityWeatherData = state => state.weather.cityWeatherData;

export const { setCurrentCity } = weatherSlice.actions;
export default weatherSlice.reducer;