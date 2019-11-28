import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  allRequest: null,
  allSuccess: ['data'],
  allFailure: null,
})

export const EmailsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null,
  search: null,
})

/* ------------- Selectors ------------- */

export const EmailsSelectors = {
  getData: state => state.emails.data,
  getSearch: state => state.emails.search,
  getFilteredData: ({emails: {data, search}}) => performSearch(data, search),
}

const performSearch = (data, search) => {

}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({fetching: true})

// successful api lookup
export const success = (state, {data}) =>
  state.merge({fetching: false, error: null, data})

// Something went wrong somewhere.
export const failure = state =>
  state.merge({fetching: false, error: true})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ALL_REQUEST]: request,
  [Types.ALL_SUCCESS]: success,
  [Types.ALL_FAILURE]: failure,
})
