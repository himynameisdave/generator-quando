import { combineReducers } from 'redux';
import defaultState from './defaultState';


// Sample reducer
const sample = (state = defaultState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return Object.assign({}, state, {
        newProp: action.newProp
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ sample });

export default rootReducer;
