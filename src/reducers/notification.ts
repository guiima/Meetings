import * as types from '../types/notification';

const INITIAL_STATE = {
  showNotification: false,
  message: '',
  notificationType: 0,
};

interface Action {
  type: string;
  payload?: any;
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.TOGGLE_NOTIFICATION:
      return action.payload
        ? {...state, showNotification: true}
        : {...state, showNotification: !state.showNotification};
      break;
    case types.SET_MESSAGE:
      return {...state, message: action.payload};
      break;
    case types.SET_NOTIFICATION_TYPE:
      return {...state, notificationType: action.payload};
      break;
    default:
      return state;
      break;
  }
};
