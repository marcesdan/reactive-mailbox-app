import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserActions, {UserSelectors} from '../Redux/UserRedux'
import LoginForm from '../Components/LoginForm'

class LoginContainer extends Component {
  state = {
    email: null,
    password: null
  }

  handleChange = type => event => this.setState({[type]: event.target.value})

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state)
  }


  render() {
    const {isLoading, hasError} = this.props
    return (
      <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoading={isLoading}
        hasError={hasError}
      />
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(UserActions.loginRequest(data))
})

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = state => ({
  isLoading: UserSelectors.isLoading(state),
  hasError: UserSelectors.hasError(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)