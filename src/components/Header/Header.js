import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from './Modal';
import UserBar from '../UserBar/UserBar';
import windowSize from 'react-window-size';
import logo from './Logo/logo-png.png';
import Icon from '../../components/Icon/Icon';
import styles from './Header.module.css';
import { fetchLogOut } from '../../utils/requests';
import { connect } from 'react-redux';

// -------------- import from DiaryBlock: ------------
// import { closeModalProductsAction } from '../../redux/actions/productActions';

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
    setTimeout(() => {
      const { token } = this.props;
      if (token) {
        this.setState({ isLogged: true });
      } else if (!token) {
        this.setState({ isLogged: false });
      }
    }, 2000);
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
    const {
      username,
      token

      // -------------- props from DiaryBlock: ------------
      // isModalShowed
      // toogleModalProducts
    } = this.props;
    return (
      <div className={styles.header}>
        <div className={isLogged ? styles.container : styles.loggedContainer}>
          <div className={isLogged ? styles.logoNavigationBox : styles.loggedLogoNavigationBox}>
            <div className={styles.logotype}>
              <Link to="/">
                <img className={styles.logoImg} src={logo} alt="LOGO" />
                <span className={styles.logoText}>
                  Slim<span className={styles.logoTextSpan}>Mom</span>
                </span>
              </Link>
            </div>
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
            {/* ---------------------- close button for both modals ((!)you have to uncomment css background img too) ----------------------------
              /* {isModalShowed && <button type="button" onClick={toogleModalProducts} className={styles.closeModal} />} */}
            <div className={styles.mobileLogoutBox}>
              <p className={styles.username}>{username}</p>{' '}
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
  token: state.session.token

  // -------------- modal flag(boolean) from DiaryBlock: ------------
  // isModalShowed: state.dailyBlock.isModalProduct
});
const mapDispatchToProps = dispatch => ({
  // -------------- modal flag(boolean) from DiaryBlock: ------------
  // toogleModalProducts: () => {
  //   dispatch(closeModalProductsAction());
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(Header));
