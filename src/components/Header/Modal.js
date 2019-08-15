import React from 'react';
import styles from './Modal.module.css';
import { NavLink } from 'react-router-dom';

const Modal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.linkBox}>
                <NavLink exact to="/dashboard/diary">
                    Дневник
        </NavLink>
                <NavLink exact to="/dashboard">
                    Калькулятор
        </NavLink>
            </div>
        </div>
    );
};

export default Modal;
