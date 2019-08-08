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
import PropTypes from 'prop-types';

// const userToken = JSON.parse(localStorage.getItem('userToken'))

class Header extends Component {
    static propTypes = {
        token: PropTypes.string.isRequired
    };
    state = {
        openModal: false,
        isLogged: false,
        toogleIcon: false
    };

    toogleModal = e => {
        this.setState(state => ({ openModal: !state.openModal, toogleIcon: !state.toogleIcon }));
    };
    // Here I have to write a function than will check if the User is LoggedIn or not, and change the state apropriately

    componentDidMount() {
        const { token } = this.props;
        if (!!token) {
            this.setState({ isLogged: true });
        }
        localStorage.setItem('userToken', '1234');
    }
    logOut = () => {
        localStorage.removeItem('userToken');
        this.setState(state => ({ isLogged: !state.isLogged }));
    };

    render() {
        const { toogleModal, logOut } = this;
        const { openModal, isLogged, toogleIcon } = this.state;
        const { token, username } = this.props;

        console.log('token: ', token);
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
                        {isLogged && this.props.windowWidth > 1024 && (
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
                    {isLogged && (
                        <div className={styles.usernamebox}>
                            <p className={styles.usernameText}> {username}</p>
                            <p>|</p>
                            <button onClick={logOut} className={styles.logoutText}>
                                Выйти
              </button>
                        </div>
                    )}
                    {isLogged && !toogleIcon && this.props.windowWidth < 1024 && (
                        // <button className={styles.burgerBtn} onClick={toogleModal}>
                        <img onClick={toogleModal} className={styles.burger} src={burger} alt="burger button" />
                        // </button>
                    )}
                    {isLogged && toogleIcon && this.props.windowWidth < 1024 && (
                        // <button className={styles.burgerBtn} onClick={toogleModal}>
                        <img onClick={toogleModal} className={styles.cross} src={cross} alt="burger button" />
                        // </button>
                    )}
                    {openModal && this.props.windowWidth < 1024 && <Modal />}
                    {!isLogged && <UserBar />}
                </div>
                <div className={styles.grayLine} />
                {isLogged && (
                    <div className={styles.greyZone}>
                        <p className={styles.username}>{username}</p>{' '}
                        <img onClick={logOut} className={styles.logoutButton} src={logout} />
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    username: state.session.user.nickname
});
const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(windowSize(Header));
