export default function reducer(state = {weather: {}}, action) {
    switch (action.type) {
        case ACTIONS.LOADING_WEATHER:
            return {
                ...state,
                weather: {
                    ...state.weather,
                    text: `正在加载中...`,
                }
            }
        case ACTIONS.LOAD_WEATHER_SUCCESS:
            return {
                ...state,
                weather: {
                    ...state.weather,
                    text: `北京，${action.data.wendu}度，空气质量${action.data.quality}`,
                }
            }
        case ACTIONS.LOAD_WEATHER_FAILURE:
            return {
                ...state,
                weather: {
                    ...state.weather,
                    text: `加载失败...${action.error}`,
                }
            }
        default:
            return state;
    }
}

export const ACTIONS = {
    LOADING_WEATHER: 'LOADING_WEATHER',
    LOAD_WEATHER_SUCCESS: 'LOAD_WEATHER_SUCCESS',
    LOAD_WEATHER_FAILURE: 'LOAD_WEATHER_FAILURE',
};