export const getWeatherDataByCoordinates = (params) => {
    const period = params.period;
    const point = params.point;
    let periodConst = 0;
    switch (period) {
        case 'for_week':
            periodConst = 7;
            break;
        case "for_today":
            periodConst = 1;
            break;
        default:
            periodConst = 7;

    }
    return dispatch => {
        dispatch(fetchBegin());
        return fetch('/settings/' + point.lat + '&' + point.lon, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                json.forecasts = json.forecasts.splice(0, periodConst);
                dispatch(fetchSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchFailure(error)));
    };
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_GETWEATHER_BEGIN = 'FETCH_GETWEATHER_BEGIN';
export const FETCH_GETWEATHER_SUCCESS = 'FETCH_GETWEATHER_SUCCESS';
export const FETCH_GETWEATHER_FAILURE = 'FETCH_GETWEATHER_FAILURE';

export const fetchBegin = () => ({
    type: FETCH_GETWEATHER_BEGIN
});

export const fetchSuccess = data => ({
    type: FETCH_GETWEATHER_SUCCESS,
    payload: data
});

export const fetchFailure = error => ({
    type: FETCH_GETWEATHER_FAILURE,
    payload: {error}
});