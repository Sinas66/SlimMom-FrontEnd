import React, { Component } from 'react';
import styles from './UserBar.module.css';
export default class UserBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a className={styles.link} href="#">
          Вход <span className={styles.spanLine}>|</span> Регистрация
        </a>
      </div>
    );
  }
}
