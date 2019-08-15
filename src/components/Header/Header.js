import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import { fetchLogOut } from '../../utils/requests';
import { closeModalProductsAction } from '../../redux/actions/productActions';
import UserBar from '../UserBar/UserBar';
import Modal from './Modal';
import Icon from '../../assets/icons/Icon/Icon';
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
  };h

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
      // localStorage.removeItem('userToken');
      localStorage.clear();
    });
  };

  render() {
    const { toogleModal, logOut } = this;
    const { openModal, isLogged } = this.state;
    const { username, token, isModalShowed, toogleModalProducts, session } = this.props;
    return (
      <div className={styles.header}>
        <div className={session.token ? styles.container : styles.loggedContainer}>
          <div className={session.token ? styles.logoNavigationBox : styles.loggedLogoNavigationBox}>
            <Link className={styles.logotype} to={session.token ? '/dashboard' : '/home'}>
              <img className={styles.logoImg} src={logo} alt="LOGO" />
              <span className={styles.logoText}>
                Slim<span className={styles.logoTextSpan}>Mom</span>
              </span>
            </Link>

            {session.token && this.props.windowWidth > 1023 && (
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

          {session.token && (
            <div className={styles.usernameBurgerWrapper}>
              {session.token && this.props.windowWidth > 767 && (
                <div className={styles.usernamebox}>
                  <p className={styles.usernameText}> {username}</p>
                  <p>|</p>
                  <Link onClick={logOut} className={styles.logoutText} to={'/'}>
                    Выйти
                  </Link>
                </div>
              )}
              {session.token && !openModal && this.props.windowWidth < 1023 && (
                <button className={styles.burgerBtn} onClick={toogleModal}>
                  <Icon className={styles.burger} icon="Menu" />
                </button>
              )}
              {session.token && openModal && this.props.windowWidth < 1023 && (
                <button className={styles.burgerBtn} onClick={toogleModal}>
                  <Icon className={styles.cross} icon="Close" />
                </button>
              )}
            </div>
          )}
          {openModal && this.props.windowWidth < 1023 && <Modal toogleModal={toogleModal} />}
          {!session.token && <UserBar />}
        </div>
        {session.token && this.props.windowWidth < 767 && (
          <div className={isModalShowed ? styles.greyZone : styles.greyZoneModalClose}>
            {isModalShowed && (
              <button type="button" onClick={toogleModalProducts} className={styles.closeModal}>
                <Icon icon="Arrow_Back" />
              </button>
            )}
            <div className={styles.mobileLogoutBox}>
              <p className={styles.username}>{username}</p>
              <Link to={'/'}>
                <Icon onClick={logOut} className={styles.logoutButton} icon="Logout" />
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  session: state.session,
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
