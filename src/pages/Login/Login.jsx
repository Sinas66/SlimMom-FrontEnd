import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    redirectToPreviousRoute: false,
    nickname: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nickname, password } = this.state;

    this.props.logIn(
      {
        nickname,
        password
      },
      () => {
        this.setState({ redirectToPreviousRoute: true });
      }
    );
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    const fieldName = e.currentTarget.dataset.fieldName;

    this.setState(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  render() {
    const { location, errorMsg } = this.propsconst;
    const { form } = location.state || { from: { pathname: '/' } };
    const { nickname, password, redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={form} />;
    }

    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'nickname'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Nickname'}
            value={nickname}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Password'}
            value={password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  nickname: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Login;
