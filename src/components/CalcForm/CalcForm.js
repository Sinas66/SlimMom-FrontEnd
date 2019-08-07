import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validations } from 'indicative/validator';

import css from './CalcForm.module.css';

const rules = {
  height: 'required|integer|range:1,230',
  age: 'required|integer|range:1,99',
  currentWeight: 'required|range:1,199',
  desireWeight: 'required|range:1,199',
  groupBlood: 'required|integer|range:1,4'
};

const messages = {
  required: 'Поле обязательно для заполнения',
  integer: 'Введите целое число',
  'height.range': 'Введите целое число от 1 до 230',
  'age.range': 'Введите целое число от 1 до 99',
  'currentWeight.range': 'Введите целое число от 1 до 199',
  'desireWeight.range': 'Введите целое число от 1 до 199',
  'groupBlood.range': 'Введите целое число от 1 до 4'
};

class CalcForm extends Component {
  state = {
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
    groupBlood: '',
    errors: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { height, age, currentWeight, desireWeight, groupBlood } = this.state;

    validations({ height, age, currentWeight, desireWeight, groupBlood }, rules, messages)
      .then(data => {
        console.log(data);
      })
      .catch(errors => {
        console.log(errors);
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
          <button type="button" className={css.btn} onClick={this.handleSubmit}>
            Начать худеть
          </button>
        </div>
      </div>
    );
  }
}

export default CalcForm;
