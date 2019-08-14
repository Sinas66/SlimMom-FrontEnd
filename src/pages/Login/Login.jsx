import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memorizedUserData } from './selectors';
import style from './Login.module.css';

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

  redirectUser = data => {
    localStorage.setItem('userToken', data.token);

    if (!data.userData) {
      this.props.history.push('/dashboard');
    } else {
      this.props.history.push('/dashboard/diary');
    }
  };

  handleLogin = e => {
    e.preventDefault();

    const { login, password } = this.state;

    const dataToLogin = {
      nickname: login,
      password: password
    };

    this.props.loginUser(JSON.stringify(dataToLogin)).then(data => this.redirectUser(data));
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

    this.props.registerUser(JSON.stringify(dataToRegister)).then(data => this.redirectUser(data));
  };

  render() {
    return (
      <>
        <div className={style.loginWrapper}>
          <div className={style.entry}>ВХОД / РЕГИСТРАЦИЯ</div>
          <form>
            <div>
              {/* <label htmlFor="login">Login</label> */}
              <input
                type="text"
                name="login"
                id="login"
                onChange={this.handleInputs}
                placeholder="Логин *"
                className={style.input}
              />
            </div>
            <div>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleInputs}
                placeholder="Пароль *"
                className={style.input}
              />
            </div>
            <div className={style.butModule}>
              <div>
                <button onClick={this.handleLogin} className={style.button}>
                  Вход
                </button>
              </div>
              <div>
                <button onClick={this.handleRegister} className={style.button}>
                  Регистрация
                </button>
              </div>
            </div>
          </form>
        </div>
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
