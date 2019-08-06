import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <>
    <section className={styles.grid}>
      <div className={styles.header}>Header</div>
      <div className={styles.calkBlock}>CalcBlock</div>
      <div className={styles.summary}>Summary</div>
    </section>
    </>
  )
}

export default Dashboard;

