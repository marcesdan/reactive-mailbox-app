import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  loginRequest: ['data'],
  loginSuccess: ['data'],
  logoutRequest: null,
  logoutSuccess: null,
  failure: null,
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  logged: null,
  fetching: null,
  error: null,
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  getData: state => state.user.data,
  isLoggedIn: state => state.user.logged,
  isLoading: state => state.user.fetching,
  hasError: state => state.user.error,
}

/* ------------- Reducers ------------- */
// request the login to the api
export const request = (state, {data}) =>
  state.merge({fetching: true, data})

// successful api login
export const loginSuccess = (state, {data}) =>
  state.merge({fetching: false, error: null, logged: true, data})

// successful api logout
export const logoutSuccess = (state, {data}) =>
  state.merge({fetching: false, error: null, logged: false, data})

// Something went wrong somewhere.
export const failure = state =>
  state.merge({fetching: false, error: true})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGOUT_REQUEST]: request,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.FAILURE]: failure,
})
