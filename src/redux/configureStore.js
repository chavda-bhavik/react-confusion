import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createForms } from 'react-redux-form'
import { Dishes } from './dishes'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { Comments } from './comments';
import { initialFeedback } from './forms'
import thunk from "redux-thunk";
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: initialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}