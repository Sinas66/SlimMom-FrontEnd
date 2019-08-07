import React from 'react';
import styles from './Modal.module.css';
import { NavLink } from 'react-router-dom';

const Modal = () => {
  return (
    <div className={styles.container}>
      {/* <a href="#">Diary</a>
      <a href="#">Calculator</a> */}
      <div className={styles.linkBox}>
        <NavLink exact to="/diary">
          Дневник
        </NavLink>
        <NavLink exact to="/calc">
          Калькулятор
        </NavLink>
      </div>
    </div>
  );
};

export default Modal;
