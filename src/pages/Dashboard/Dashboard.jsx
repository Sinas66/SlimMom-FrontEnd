import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import CalcForm from "../../components/CalcForm/CalcForm";
import Summary from '../../components/Summary/Summary';
import DiaryBlock from '../../components/DiaryBlock/DiaryBlock';
import windowSize from 'react-window-size';

export default class Dashboard extends Component {
  state = {};

  render() {
    const { token } = this.props;
    return (
        <>
          <section className={styles.grid}>
            <div className={styles.headerBlock_container}>
              <Header token={token} />
            </div>
            <div className={styles.calcDairyBlock_container}>
              <Route path="/dashboard" exact component={CalcForm} />
              <Route path="/dashboard/" component={DiaryBlock} />
            </div>
            <div className={styles.summaryBlock_container}>
              <Summary />
            </div>
          </section>
        </>
    );
  }
}
