import {all, takeLatest} from 'redux-saga/effects'
/* ------------- Types ------------- */
// import { StartupTypes } from '../Redux/StartupRedux'
import {UserTypes} from '../Redux/UserRedux'
import {EmailsTypes} from '../Redux/EmailsRedux'

/* ------------- Sagas ------------- */
import {getAll as getAllEmails} from './EmailsSagas'
import {login, logout} from './UserSagas'

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
import MailboxService from '../Services/MailboxService'

/* ------------- API ------------- */
const mailboxService = MailboxService.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(UserTypes.LOGIN_REQUEST, login, mailboxService),
    takeLatest(UserTypes.LOGOUT_REQUEST, logout, mailboxService),
    takeLatest(EmailsTypes.ALL_REQUEST, getAllEmails, mailboxService),
  ])
}
