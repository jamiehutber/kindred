/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


/* Reducers */

//### Not Logged in
  //### Login
  import user from './userActions';

//Logged In
import currentSexInfo from './currentSexInfo';
import desire from './desire';


const reducers = combineReducers({
  router: routerReducer,
  form: formReducer,
  user,
  currentSexInfo,
  desire
});

export default reducers;
