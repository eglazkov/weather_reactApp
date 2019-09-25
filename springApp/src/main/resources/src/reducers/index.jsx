import {combineReducers} from 'redux';
import weatherData from './fetchWeatherAPI';


const allReducers = combineReducers({
    weatherData: weatherData
});

export default allReducers;
