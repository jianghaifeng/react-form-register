import React from 'react';
import './styles.css';
import { ERRORS } from './constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUsernameValid: false,
      isPasswordValid: false
    }
  }

  validateUsername = () => {
    var username = document.getElementById('username').value
    this.setState({isUsernameValid: ERRORS.username.regex.test(username)})
  }
  validatePassword = () => {
    var password = document.getElementById('password').value
    this.setState({isPasswordValid: ERRORS.password.regex.test(password)})
  }

  render() {
    const {isUsernameValid, isPasswordValid} = this.state
    return (
      <div className="App">
        <div className="logo">
          <img
            src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
            width="100px"
          />
        </div>
        <form noValidate>
          <label for="username">
            <span className="label-star">*</span> Username:
            <input
              id="username"
              name="username"
              placeholder="6~10 characters"
              type="text"
              onInput={this.validateUsername}
            />
          </label>
          {!isUsernameValid ? <label className="error">{ERRORS.username.message}</label> : null}

          <label for="password">
            <span className="label-star">*</span> Password:
            <input
              id="password"
              name="password"
              placeholder="6~10 numbers"
              type="password"
              onInput={this.validatePassword}
            />
          </label>
          {!isPasswordValid ? <label className="error">{ERRORS.password.message}</label> : null}
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

