import Moment from 'moment';
import {
  SET_DESIRE_DATA,
  SET_MASTURBATION_DATA,
  SET_SEX_DATA,
  ADD_DATES,
  REMOVE_DATES
} from '../actions/sexDataAction';

const initialState = {
  'desire': {},
	'masturbation': {},
	'sex': {},
	'dates': {}
};

const formatSexData = function (date){
	return Moment(date).format('MM-D-YYYY_h-mm');
}

function sexData (state = initialState, action) {
	switch (action.type) {
		case SET_DESIRE_DATA:
      var key = formatSexData(action.data.date);
      var newDesire = {...state.desire};
      newDesire[key] = action.data;
			return {
				...state,
				desire: newDesire
			}
		case SET_MASTURBATION_DATA:
			return {
				...state,
				masturbation: action.data
			}
		case SET_SEX_DATA:
			return {
				...state,
				sex: action.data
			}
		case ADD_DATES:
      var key = Moment(action.date).format('MM-D-YYYY');
      const newDates = {...state.dates};
      newDates[key] = isNaN(newDates[key]) ? 1 : newDates[key]+1 ;
			return {
				...state,
				dates: newDates
			}
		case REMOVE_DATES:
			return {
				...state,
				sex: action.data
			}
	}
	return state
}
 
export default sexData;

