import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {UserSelectors} from '../Redux/UserRedux'
import EmailsActions from '../Redux/EmailsRedux'
import LoginContainer from './LoginContainer'

class RootContainer extends Component {
  componentDidMount() {
    const {isLoggedIn, fetchContents} = this.props
    if (isLoggedIn) {
      fetchContents()
    }
  }

  render() {
    const {isLoggedIn} = this.props
    if (!isLoggedIn) return <LoginContainer/>
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              ABOUT
            </Route>
            <Route path="/users">
              USERS
            </Route>
            <Route path="/">
              HOME
            </Route>
            <Route path="/login">
              <LoginContainer/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  fetchContents: () => {
    dispatch(EmailsActions.allRequest())
  }
})

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = state => ({
  isLoggedIn: UserSelectors.isLoggedIn(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)