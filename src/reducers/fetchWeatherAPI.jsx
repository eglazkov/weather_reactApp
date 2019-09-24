import {
    FETCH_GETWEATHER_BEGIN,
    FETCH_GETWEATHER_SUCCESS,
    FETCH_GETWEATHER_FAILURE
} from '../actions/getWeatherByCoordinates';

const initialState = {
    data: {},
    loading: false,
    error: null
};

export default function weatherData(state = initialState, action) {
    switch (action.type) {
        case FETCH_GETWEATHER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_GETWEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case FETCH_GETWEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload.error
            };

        default:
            return state;
    }
}