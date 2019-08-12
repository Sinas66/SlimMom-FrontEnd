import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { getProductsByDayAction } from '../../redux/actions/productActions';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';

class Dashboard extends Component {
  state = {};
  componentDidMount = () => {
    const token = localStorage.getItem('userToken');
    const date = new Date().getTime();
    // setProductByDay(token, date);
  };

  render() {
    const { windowWidth, location } = this.props;

    return (
      <section className={styles.grid}>
        <div className={styles.headerBlock_container}>Header</div>

        <div className={styles.calcDairyBlock_container}>
          <Route path="/dashboard" exact render={() => <div> Dashbard </div>} />
          <Route path="/dashboard/diary" render={() => <div> Dairy </div>} />
        </div>

        {location.pathname === '/dashboard/diary' ? (
          windowWidth > 767 && <div className={styles.summaryBlock_container}>Summary</div>
        ) : (
          <div className={styles.summaryBlock_container}>Summary</div>
        )}
      </section>
    );
  }
}

const mapDispatchToProps = dis => ({
  setProductsByDay(tok, date) {
    dis(getProductsByDayAction(tok, date));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(windowSize(Dashboard));
