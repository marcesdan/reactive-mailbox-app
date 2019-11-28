/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import {call, put, select} from 'redux-saga/effects'
import UserActions, {UserSelectors} from '../Redux/UserRedux'

export function* login(api, {data}) {
  console.log(data)
  const response = yield call(api.login, data)
  // success?
  if (response.ok) {
    yield put(UserActions.loginSuccess(response.data))
  } else {
    yield put(UserActions.failure())
  }
}

export function* logout(api) {
  // get current data from Store
  const lang = yield select(UserSelectors.getData)
  // make the call to the api
  const response = yield call(api.logout, lang)
  //remove token (?)
  // success?
  if (response) {
    yield put(UserActions.logoutSuccess(response.data.data))
  } else {
    yield put(UserActions.failure())
  }
}
