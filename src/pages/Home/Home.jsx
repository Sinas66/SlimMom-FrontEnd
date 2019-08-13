import React from 'react';
import Header from '../../components/Header/Header';
import CalcForm from '../../components/CalcForm/CalcForm';
import style from './Home.module.css';

const Home = () => (
  <div className={style.homeContainer}>
    <div className={style.homeGroup}>
      <div className={style.homeHeader}>
        <Header />
      </div>
      <div>
        <CalcForm />
      </div>
    </div>
  </div>
);

export default Home;
