import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './CalcForm.module.css';

class CalcForm extends Component {
  static propTypes = {
    getData: PropTypes.func.isRequired,
  }

  state = {
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
    groupBlood: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  

  render() {
    const { height, age, currentWeight, desireWeight, groupBlood } = this.state;
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.titleContainer}>
            <p className={css.title}>Узнай свою суточную </p>
            <p className={css.title}>норму калорий</p>
          </div>
          <form>
            <div className={css.leftInputs}>
              <label htmlFor="height">
                <input
                  className={css.input}
                  id="height"
                  type="number"
                  placeholder="Рост *"
                  name="height"
                  value={height}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="age">
                <input
                  className={css.input}
                  id="age"
                  type="number"
                  placeholder="Возраст *"
                  name="age"
                  value={age}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="currentWeight">
                <input
                  className={css.input}
                  id="currentWeight"
                  type="number"
                  placeholder="Текущий вес *"
                  name="currentWeight"
                  value={currentWeight}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className={css.rightInputs}>
              <label htmlFor="desireWeight">
                <input
                  className={css.input}
                  id="desireWeight"
                  type="number"
                  placeholder="Желаемый вес *"
                  name="desireWeight"
                  value={desireWeight}
                  onChange={this.handleChange}
                />
              </label>
              <section className={css.radioContainer}>
                <h3>Группа крови *</h3>
                <div className={css.radioInputs}>
                  <label htmlFor="groupBlood_1">
                    1
                    <input id="groupBlood_1" type="radio" name="groupBlood" value="1" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="groupBlood_2">
                    2
                    <input id="groupBlood_2" type="radio" name="groupBlood" value="2" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="groupBlood_3">
                    3
                    <input id="groupBlood_3" type="radio" name="groupBlood" value="3" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="groupBlood_4">
                    4
                    <input id="groupBlood_3" type="radio" name="groupBlood" value="4" onChange={this.handleChange} />
                  </label>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CalcForm;
