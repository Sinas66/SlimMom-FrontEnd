import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import { fetchLogOut } from '../../utils/requests';
import { closeModalProductsAction } from '../../redux/actions/productActions';
import UserBar from '../UserBar/UserBar';
import Modal from './Modal';
import Icon from '../Icon/Icon';
import logo from './Logo/logo-png.png';
import styles from './Header.module.css';

import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired
  };
  state = {
    openModal: false,
    isLogged: false
  };

  toogleModal = e => {
    this.setState(state => ({ openModal: !state.openModal }));
  };

  componentDidMount() {
    const { token } = this.props;
    if (token) {
      this.setState({ isLogged: true });
    } else if (!token) {
      this.setState({ isLogged: false });
    }
  }

  logOut = token => {
    fetchLogOut(token).then(() => {
      localStorage.removeItem('userToken');
      this.setState(state => ({ isLogged: !state.isLogged }));
    });
  };

  render() {
    const { toogleModal, logOut } = this;
    const { openModal, isLogged } = this.state;
    const { username, token, isModalShowed, toogleModalProducts } = this.props;
    return (
      <div className={styles.header}>
        <div className={isLogged ? styles.container : styles.loggedContainer}>
          <div className={isLogged ? styles.logoNavigationBox : styles.loggedLogoNavigationBox}>
            <Link className={styles.logotype} to={isLogged ? '/dashboard' : '/home'}>
              <img className={styles.logoImg} src={logo} alt="LOGO" />
              <span className={styles.logoText}>
                Slim<span className={styles.logoTextSpan}>Mom</span>
              </span>
            </Link>

            {isLogged && this.props.windowWidth > 1023 && (
              <div className={styles.navigationBox}>
                <NavLink className={styles.navigationLink} exact to="/dashboard/diary">
                  ДНЕВНИК
                </NavLink>
                <NavLink className={styles.navigationLink} exact to="/dashboard">
                  КАЛЬКУЛЯТОР
                </NavLink>
              </div>
            )}
          </div>

          {isLogged && (
            <div className={styles.usernameBurgerWrapper}>
              {isLogged && this.props.windowWidth > 767 && (
                <div className={styles.usernamebox}>
                  <p className={styles.usernameText}> {username}</p>
                  <p>|</p>
                  <button onClick={logOut} className={styles.logoutText}>
                    Выйти
                  </button>
                </div>
              )}
              {isLogged && !openModal && this.props.windowWidth < 1023 && (
                <button className={styles.burgerBtn} onClick={toogleModal}>
                  <Icon className={styles.burger} icon="Menu" />
                </button>
              )}
              {isLogged && openModal && this.props.windowWidth < 1023 && (
                <button className={styles.burgerBtn} onClick={toogleModal}>
                  <Icon className={styles.cross} icon="Close" />
                </button>
              )}
            </div>
          )}
          {openModal && this.props.windowWidth < 1023 && <Modal toogleModal={toogleModal} />}
          {!isLogged && <UserBar />}
        </div>
        {isLogged && this.props.windowWidth < 767 && (
          <div className={isModalShowed ? styles.greyZone : styles.greyZoneModalClose}>
            {isModalShowed && (
              <button type="button" onClick={toogleModalProducts} className={styles.closeModal}>
                <Icon icon="Arrow_Back" />
              </button>
            )}
            <div className={styles.mobileLogoutBox}>
              <p className={styles.username}>{username}</p>
              <Icon onClick={logOut} className={styles.logoutButton} icon="Logout" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  username: state.session.nickname,
  token: state.session.token,
  isModalShowed: state.dailyBlock.isModalProductShowed
});
const mapDispatchToProps = dispatch => ({
  toogleModalProducts: () => {
    dispatch(closeModalProductsAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(Header));
