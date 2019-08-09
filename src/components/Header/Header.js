import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import UserBar from '../UserBar/UserBar';
import windowSize from 'react-window-size';
import logo from './Logo/logo-png.png';
import burger from './Logo/burger.svg';
import cross from './Logo/cross.png';
import logout from './Logo/logout.png';
import styles from './Header.module.css';
import { connect } from 'react-redux';

// -------------- import from DiaryBlock: ------------
// import { toogleModalProductsAction } from '../../redux/actions/productActions';

import PropTypes from 'prop-types';

// const userToken = JSON.parse(localStorage.getItem('userToken'))

class Header extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired
  };
  state = {
    openModal: false,
    isLogged: true
  };

  toogleModal = e => {
    this.setState(state => ({ openModal: !state.openModal }));
  };
  // Here I have to write a function than will check if the User is LoggedIn or not, and change the state apropriately

  componentDidMount() {
    const { token } = this.props;
    if (!!token) {
      this.setState({ isLogged: true });
    }
  }
  logOut = () => {
    localStorage.removeItem('userToken');
    this.setState(state => ({ isLogged: !state.isLogged }));
  };

  render() {
    const { toogleModal, logOut } = this;
    const { openModal, isLogged } = this.state;
    const {
      username
      // -------------- props from DiaryBlock: ------------
      // isModalShowed
      // toogleModalProducts
    } = this.props;
    return (
      <div className={styles.header}>
        <div className={isLogged ? styles.container : styles.loggedContainer}>
          <div className={isLogged ? styles.logoNavigationBox : styles.loggedLogoNavigationBox}>
            <div className={styles.logotype}>
              <img className={styles.logoImg} src={logo} alt="LOGO" />
              <h1 className={styles.logoText}>
                Slim<span className={styles.logoTextSpan}>Mom</span>
              </h1>
            </div>
            {isLogged && this.props.windowWidth > 1023 && (
              <div className={styles.navigationBox}>
                <NavLink className={styles.navigationLink} exact to="/diary">
                  Дневник
                </NavLink>
                <NavLink className={styles.navigationLink} exact to="/calc">
                  Калькулятор
                </NavLink>
              </div>
            )}
          </div>
          {/* If user is logged - show the burger button (isLogged && button) */}
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
                <img className={styles.burger} src={burger} alt="burger button" />
              </button>
            )}
            {isLogged && openModal && this.props.windowWidth < 1023 && (
              <button className={styles.burgerBtn} onClick={toogleModal}>
                <img className={styles.cross} src={cross} alt="burger button" />
              </button>
            )}
          </div>
          {openModal && this.props.windowWidth < 1023 && <Modal />}
          {!isLogged && <UserBar />}
        </div>
        {isLogged && this.props.windowWidth < 767 && (
          <div
            className={
              // -------------- checking if modal from DiaryBlock opened: ------------
              // isModalShowed
              false ? styles.greyZone : styles.greyZoneModalClose
            }
          >
            {/* ---------------------- close button for both modals ----------------------------
              /* {isModalShowed && <button type="button" onClick={toogleModalProducts} className={styles.closeModal} />} */}
            <div className={styles.mobileLogoutBox}>
              <p className={styles.username}>{username}</p>{' '}
              <img onClick={logOut} className={styles.logoutButton} src={logout} alt="1" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  username: state.session.user.nickname

  // -------------- modal flag(boolean) from DiaryBlock: ------------
  // isModalShowed: state.dailyBlock.isModalProduct
});
const mapDispatchToProps = dispatch => ({
  // -------------- modal flag(boolean) from DiaryBlock: ------------
  // toogleModalProducts: () => {
  //   dispatch(toogleModalProductsAction());
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(Header));
