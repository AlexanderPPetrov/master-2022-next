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

export function setMovies(value) {
    return {
        type: actionTypes.SET_MOVIES,
        payload: value,
    }
}

export function setSelectedMovie(value) {
    return {
        type: actionTypes.SET_SELECTED_MOVIE,
        payload: value,
    }
}

export function getMovies(params) {
    return async (dispatch) => {
        try {
            axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: 'ca3d69ee336e43d8099727f0d7ce3859',
                    include_adult: false,
                    page: 1,
                }
              }).then(response => {
                  dispatch(setMovies(response.data.results))
              })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getMovieDetails(movie_id) {
    return async (dispatch) => {
        try {
            axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
                params: {
                    api_key: 'ca3d69ee336e43d8099727f0d7ce3859',
                }
              }).then(response => {
                  dispatch(setSelectedMovie(response.data))
              })
        } catch (error) {
            console.log(error);
        }
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