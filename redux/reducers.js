import actionTypes from './action-types';
import {combineReducers} from "redux";

export function dailyWeather(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_DAILY_WEATHER:
            return action.payload;
        default:
            return state;
    }
}

export function currentWeather(state = {}, action) {
    switch(action.type) {
        case actionTypes.SET_CURRENT_WEATHER:
            return action.payload;
        default:
            return state;
    }
}

export function movies(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export function selectedMovie(state = {}, action) {
    switch(action.type) {
        case actionTypes.SET_SELECTED_MOVIE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    dailyWeather,
    currentWeather,
    movies,
    selectedMovie,
})