import React, { Component } from 'react';
import App from '../../index';

import css from './CalcForm.module.css';

export default CalcForm;

class CalcForm extends Component {
  state = {
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
    bloodGroup: '',
    isOpenModal: false
   }

   handleChange = e => {
     this.setState({
      [e.target.name]: e.target.value,
      })
   }

  render() {
    const { height, age, currentWeight, desireWeight, bloodGroup } = this.state
    return (
      <form>
        <input type="number" name="height" value={height} onChange={this.handleChange} />
        <input type="number" name="age" value={age} onChange={this.handleChange} />
        <input type="number" name="currentWeight" value={currentWeight} onChange={this.handleChange} />
        <input type="number" name="desireWeight" value={desireWeight} onChange={this.handleChange} />
        <input type="number" name="bloodGroup" value={bloodGroup} onChange={this.handleChange} />
      </form>
    );
  }
}

export default CalcForm;
