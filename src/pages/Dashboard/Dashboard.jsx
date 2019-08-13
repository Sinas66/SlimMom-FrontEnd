import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { getUserData } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import CalcForm from '../../components/CalcForm/CalcForm';
import Summary from '../../components/Summary/Summary';

class Dashboard extends Component {
  state = {};
  componentDidMount = () => {
    const token = localStorage.getItem('userToken');

    if (!!token) {
      this.props.userData(token);
    }
  };

  render() {
    const { windowWidth, location } = this.props;

    return (
      <section className={styles.grid}>
        <div className={styles.headerBlock_container}>Header</div>

        <div className={styles.calcDairyBlock_container}>
          <Route
            path="/dashboard"
            exact
            render={() => (
              <div>
                {' '}
                <CalcForm />{' '}
              </div>
            )}
          />
          <Route path="/dashboard/diary" render={() => <div> Dairy </div>} />
        </div>

        {location.pathname === '/dashboard/diary' ? (
          windowWidth > 767 && <div className={styles.summaryBlock_container}>{Summary}</div>
        ) : (
          <div className={styles.summaryBlock_container}>{Summary}</div>
        )}
      </section>
    );
  }
}

const mapDispatchToProps = {
  userData: getUserData
};

export default connect(
  null,
  mapDispatchToProps
)(windowSize(Dashboard));
