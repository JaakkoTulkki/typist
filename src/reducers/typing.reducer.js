export default function typingReducer(state = { position: 0, activeTextId: null }, action) {
  switch (action.type) {
    case 'SET_ACTIVE_TEXT':
      return Object.assign({}, state, {activeTextId: action.payload.activeTextId, position: 0});
    default:
      return state;
  }
}

export const SET_ACTIVE_TEXT = (id) => ({activeTextId: id});
