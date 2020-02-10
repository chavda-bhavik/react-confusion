import * as ActionTypes from './ActionTypes'
//import { DISHES } from './../shared/dishes'
export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DHISHES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case ActionTypes.DISHES_LOADING:
            return {
                ...state,
                isLoading:true,
                errMess: null,
                dishes: []
            }
        case ActionTypes.DISHES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
        default:
            return state;
    }
}