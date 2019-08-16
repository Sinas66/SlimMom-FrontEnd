import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memorizedUserData } from './selectors';
import Header from '../../components/Header/Header';
import style from './Login.module.css';

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

    if (login.length < 6 || password < 6) {
      return;
    }

    const dataToLogin = {
      nickname: login,
      password: password
    };

    this.props.loginUser(JSON.stringify(dataToLogin)).then(({ data, status }) => this.handleErrorLogin(data, status));
  };

  handleRegister = e => {
    e.preventDefault();

    const { login, password } = this.state;

    if (login.length < 6 || password < 6) {
      return;
    }

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
        <div className={style.pageWrapper}>
          <Header />
          <div className={style.loginWrapper}>
            <div className={style.entry}>ВХОД / РЕГИСТРАЦИЯ</div>
            <form>
              <div className={style.inputModule}>
                <label htmlFor="login" className={style.invisible}>
                  Login
                </label>
                <input
                  type="text"
                  name="login"
                  id="login"
                  onChange={this.handleInputs}
                  placeholder="Логин *"
                  className={style.input}
                />
                <label htmlFor="password" className={style.invisible}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleInputs}
                  placeholder="Пароль *"
                  className={style.input}
                />
              </div>
              <div className={style.error}>
                <p>{this.state.error}</p>
                <p>
                  {(this.state.login.length > 0) & (this.state.login.length < 6)
                    ? 'Логин должен состоять минимум из 6 знаков'
                    : null}
                </p>
                <p>
                  {(this.state.password.length > 0) & (this.state.password.length < 6)
                    ? 'Пароль должен состоять минимум из 6 знаков'
                    : null}
                </p>
              </div>
              <div className={style.butModule}>
                <button onClick={this.handleLogin} className={style.button}>
                  Вход
                </button>
                <button onClick={this.handleRegister} className={style.button}>
                  Регистрация
                </button>
              </div>
            </form>
          </div>
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
