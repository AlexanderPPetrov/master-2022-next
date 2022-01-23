import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setDailyWeather(value) {
    return {
        type: actionTypes.SET_DAILY_WEATHER,
        payload: value,
    }
}

export function setCurrentWeather(value) {
    return {
        type: actionTypes.SET_CURRENT_WEATHER,
        payload: value,
    }
}

export function getWeather(params) {
    return async (dispatch) => {
        try {
            axios.get('https://api.openweathermap.org/data/2.5/onecall', {
                params: {
                  lat: 33.44,
                  lon: -94.04,
                  exclude: 'hourly,minutely',
                  units:'metric',
                  appid: constants.apiKey,
                  lang: 'bg',
                }
              }).then(response => {
                  dispatch(setDailyWeather(response.data.daily))
                  dispatch(setCurrentWeather(response.data.current))
              })
        } catch (error) {
            console.log(error);
        }
    }
}