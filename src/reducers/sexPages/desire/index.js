/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';

import desireReducer from './desireReducer';
import current from './desireCurrentlReducer';

const desire = combineReducers({
    data: desireReducer,
    current
});

export default desire;
