import { FETCH_WEATHER } from '../actions/weather';

export default () => ( state = [], action: any) {
    switch (action.type) {
     case FETCH_WEATHER:
     return [ action.payload.data, ...state];
    }

    return state;
}