import * as ACTION_TYPES from '../actions/ActionTypes'

const initialState = {
  isAuthorised: false,
  userData: 'Loading...',
  usersList: 'Loading...',
  authorisedUserData: 'Loading...'
}

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.USERS_LIST_SUCCESS:
      return {
        ...state,
        usersList: action.payload
      }
    case ACTION_TYPES.USER_INFO_SUCCESS:
      return {
        ...state,
        userData: action.payload
      }
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorised: true
      }
    case ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthorised: false
      }
    default:
      return state
  }
}

export default UserReducer;
