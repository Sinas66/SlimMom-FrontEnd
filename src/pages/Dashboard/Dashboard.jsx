import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DiaryBlock from '../../components/DiaryBlock/DiaryBlock';

class Dashboard extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired
  };

  state = {};

  render() {
    const { token } = this.props;
    return (
      <>
        <DiaryBlock token={token} />
      </>
    );
  }
}

export default Dashboard;
