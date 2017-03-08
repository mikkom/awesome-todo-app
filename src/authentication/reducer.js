import * as t from './actionTypes';

const initState = {
  authenticated: false
};

export default (state = initState, action) => {
  switch(action.type) {
    case t.LOGIN: {
      return { ...state, authenticated: !state.authenticated}
    }
    default:
      return state;
  }
};
