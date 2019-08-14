import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memorizedUserData } from './selectors';

import { sendRegisterData, sendLoginData } from '../../redux/actions/auth';

class Login extends Component {
  state = {
    login: '',
    password: '',
    error: ''
  };

  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  redirectUser = data => {
    localStorage.setItem('userToken', data.token);

    if (!data.userData) {
      this.props.history.push('/dashboard');
    } else {
      this.props.history.push('/dashboard/diary');
    }
  };

  handleErrorLogin = (data, status) => {
    if (status === 200) {
      this.redirectUser(data.user);
    }
    if (status >= 400) {
      this.setState({
        error: data.err
      });
    }
  };

  handleErrorRegister = (data, status) => {
    if (status === 200) {
      this.redirectUser(data.user);
    }
    if (status >= 400) {
      this.setState({
        error: data.message
      });
    }
  };

  handleLogin = e => {
    e.preventDefault();

    const { login, password } = this.state;

    const dataToLogin = {
      nickname: login,
      password: password
    };

    this.props.loginUser(JSON.stringify(dataToLogin)).then(({ data, status }) => this.handleErrorLogin(data, status));
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

    this.props.registerUser(JSON.stringify(dataToRegister)).then(({ data, status }) => {
      this.handleErrorRegister(data, status);
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login" onChange={this.handleInputs} placeholder="Логин*" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={this.handleInputs} placeholder="Пароль*" />

          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
          <p>{this.state.error}</p>
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
