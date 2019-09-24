import * as ACTION_TYPES from './ActionTypes'

export const USERS_LIST_SUCCESS = {
  type: ACTION_TYPES.USERS_LIST_SUCCESS
}
export const users_list_success = (list) => {
  return {
    type: ACTION_TYPES.USERS_LIST_SUCCESS,
    payload: list
  }
}
