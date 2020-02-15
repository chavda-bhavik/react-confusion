//import { LEADERS } from './../shared/leaders'
import * as ActionTypes from './ActionTypes'

const initialState = {
    leaders: [],
    isLoading: false,
    error: null
}

export const Leaders = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {
                ...state,
                leaders: action.payload,
                isLoading: false,
                error: null
            }
        case ActionTypes.LEADERS_LOADING:
            return {
                ...state,
                isLoading: true,
                leaders: [],
                error: null
            }
        case ActionTypes.LEADERS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                leaders: []
            }
        default:
            return state;
    }
}