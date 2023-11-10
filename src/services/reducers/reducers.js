import { combineReducers } from 'redux';
import {cardReducer} from "./cardReducer";

const rootReducer = combineReducers({
    cardReducer: cardReducer
});

export default rootReducer;

