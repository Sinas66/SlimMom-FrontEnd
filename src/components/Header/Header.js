import React, { Component } from 'react';
import Modal from './Modal';
import UserBar from '../UserBar/UserBar';
import logo from './Logo/logo-png.png';
import burger from './Logo/burger.svg';
import cross from './Logo/cross.png';
import logout from './Logo/logout.png';
import styles from './Header.module.css';

export default class Header extends Component {
  state = {
    openModal: false,
    isLogged: true,
    toogleIcon: false
  };

  toogleModal = e => {
    this.setState(state => ({ openModal: !state.openModal, toogleIcon: !state.toogleIcon }));
  };
  // Here I have to write a function than will check if the User is LoggedIn or not, and change the state apropriately

  render() {
    const { toogleModal } = this;
    const { openModal, isLogged, toogleIcon } = this.state;
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logotype}>
            <img className={styles.logoImg} src={logo} width={46} height={44} alt="LOGO" />
            <h1 className={styles.logoText}>
              Slim<span className={styles.logoTextSpan}>Mom</span>
            </h1>
          </div>
          {/* If user is logged - show the burger button (isLogged && button) */}
          {isLogged && !toogleIcon && (
            // <button className={styles.burgerBtn} onClick={toogleModal}>
            <img onClick={toogleModal} className={styles.burger} src={burger} alt="burger button" />
            // </button>
          )}
          {isLogged && toogleIcon && (
            // <button className={styles.burgerBtn} onClick={toogleModal}>
            <img onClick={toogleModal} className={styles.cross} src={cross} alt="burger button" />
            // </button>
          )}
          {openModal && <Modal />}
          {!isLogged && <UserBar />}
        </div>
        {isLogged && (
          <div className={styles.greyZone}>
            <p className={styles.username}>Username</p> <img className={styles.logoutButton} src={logout} />
          </div>
        )}
      </div>
    );
  }
}
