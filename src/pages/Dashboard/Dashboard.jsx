import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import windowSize from 'react-window-size';

class Dashboard extends Component {
  state = {
    isCalcOpen: true
  };

  toggleIsCalcOpen = () => {
    this.setState(state=>({
      isCalcOpen: !state.isCalcOpen
    }))
  }


  render() {
    const { isCalcOpen } = this.state;
    return <>
            <section className={styles.grid}>
             <div className={styles.headerBlock_container}>
              Header
               </div>
             <div className={styles.calcDairyBlock_container}>
                Calc/DairyBlock
               </div>
             <div className={styles.summaryBlock_container}>
              SummaryBlock
               </div>
           </section>
          </>;
  }
}

export default Dashboard;

