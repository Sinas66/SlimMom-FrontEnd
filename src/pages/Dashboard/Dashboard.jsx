import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import CalcForm from '../../components/CalcForm/CalcForm';
import Summary from '../../components/Summary/Summary';
import DiaryBlock from '../../components/DiaryBlock/DiaryBlock';
import { getProductsByDayAction } from '../../redux/actions/productActions';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {};
  componentDidMount = () => {
    const token = localStorage.getItem('userToken')
    const date = new Date().getTime()
    setProductByDay(token, date);
  }
  
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
            <Route path="/dashboard/diary" component={DiaryBlock} />
          </div>
          <div className={styles.summaryBlock_container}>
            <Summary />
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = dis => ({
  setProductsByDay(tok,date) {
    dis(getProductsByDayAction(tok,date));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
