import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memorizedUserData } from './selectors';

import { sendRegisterData, sendLoginData } from '../../redux/actions/auth';

class Login extends Component {
  state = {
    login: '',
    password: ''
  };

  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleLogin = e => {
    e.preventDefault();

    const { login, password } = this.state;

    const dataToLogin = {
      nickname: login,
      password: password
    };

    this.props.loginUser(JSON.stringify(dataToLogin)).then(data => console.log(data));
  };

  handleRegister = e => {
    e.preventDefault();

    const { login, password } = this.state;

    let dataToRegister = {
      nickname: login,
      password: password
    };

    if (!!this.props.userData) {
      dataToRegister = {
        ...dataToRegister,
        userData: this.props.userData
      };
    }

    this.props.registerUser(JSON.stringify(dataToRegister)).then(data => console.log(data));
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login" onChange={this.handleInputs} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={this.handleInputs} />

          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </form>
      </>
    );
  }
}

const mstp = state => ({
  userData: memorizedUserData(state)
});

const mdtp = {
  registerUser: sendRegisterData,
  loginUser: sendLoginData
};

export default connect(
  mstp,
  mdtp
)(Login);
