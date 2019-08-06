import React from 'react'
import styles from './Modal.module.css';


const Modal = () => {
    return (
        <div className={styles.container}>
            <a href="#">Diary</a>
            <a href="#">Calculator</a>
            {/* <nav><NavLink exact to='/diary'>Дневник</NavLink>
                <NavLink exact to='/calc'>Калькулятор</NavLink>


            </nav> */}
        </div>
    )
}

export default Modal
