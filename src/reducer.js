import { combineReducers } from 'redux';

export function texts(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  texts,
});
export default rootReducer;