import React, { Component } from 'react';
import Header from '../../components/Header/Header';
class Dashboard extends Component {
  state = {};

  render() {
    const { token } = this.props
    return (<Header token={token} />)

  }
}

export default Dashboard;
