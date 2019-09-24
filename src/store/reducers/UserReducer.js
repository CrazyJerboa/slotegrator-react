import * as ACTION_TYPES from '../actions/ActionTypes'

const initialState = {
  isAuthorised: false,
  users_list_state: '...'
}

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.USERS_LIST_SUCCESS:
      return {
        ...state,
        users_list_state: action.payload
      }
    default:
      return state
  }
}

export default UserReducer;
