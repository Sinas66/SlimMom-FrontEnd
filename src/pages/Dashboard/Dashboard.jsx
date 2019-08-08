import React, { Component } from 'react';
import styles from './Dashboard.module.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import windowSize from 'react-window-size';

export default class Dashboard extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <>
            <section className={styles.grid}>
             <div className={styles.headerBlock_container}>
              <Header />
               </div>
             <div className={styles.calcDairyBlock_container}>
                <Route path="/dashboard/" exact component={} />
                <Route path="/diary/" component={} />
               </div>
             <div className={styles.summaryBlock_container}>
              <SummaryBlock />
               </div>
           </section>
          </>
      </Router>
      );
  }
}


