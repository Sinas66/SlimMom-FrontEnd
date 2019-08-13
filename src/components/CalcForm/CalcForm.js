import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Result from '../Result/Result';
import ErrorNotification from './ErrorNotification';
import css from './CalcForm.module.css';

const GroupBlood = {
  FIRST_GROUP: '1',
  SECOND_GROUP: '2',
  THIRD_GROUP: '3',
  FOURTH_GROUP: '4'
};

class CalcForm extends Component {
  state = {
    height: this.props.data.height,
    age: this.props.data.age,
    currentWeight: this.props.data.currentWeight,
    desiredWeight: this.props.data.desiredWeight,
    groupBlood: this.props.data.groupBlood,
    errorHeight: false,
    errorAge: false,
    errorCurrentWeight: false,
    errorDesiredWeight: false,
    errorGroupBlood: false,
    isOpenModal: false,
    isError: false,
    isValidAll: false
  };

  handleChangeHeight = e => {
    this.setState({ height: e.target.value });
    const val = Number(e.target.value);
    console.log(this.state.height);

    if (val >= 50 && val <= 230 && Number.isInteger(val)) {
      this.setState({
        isError: false,
        errorHeight: false
      });
      document.querySelector('#submit').disabled = false;
    } else {
      this.setState({
        isError: true,
        errorHeight: true
      });
      document.querySelector('#submit').disabled = true;
    }
  };

  handleChangeAge = e => {
    this.setState({ age: e.target.value });
    const val = Number(e.target.value);

    if (val >= 1 && val <= 99 && Number.isInteger(val)) {
      this.setState({
        isError: false,
        errorAge: false
      });
      document.querySelector('#submit').disabled = false;
    } else {
      this.setState({
        isError: true,
        errorAge: true
      });
      document.querySelector('#submit').disabled = true;
    }
  };

  handleChangeCurrentWeight = e => {
    this.setState({ currentWeight: e.target.value.replace(/,/g, '.') });
    const val = Number(e.target.value);

    if (val >= 30 && val <= 199) {
      this.setState({
        isError: false,
        errorCurrentWeight: false
      });
      document.querySelector('#submit').disabled = false;
    } else {
      this.setState({
        isError: true,
        errorCurrentWeight: true
      });
      document.querySelector('#submit').disabled = true;
    }
  };

  handleChangeDesiredWeight = e => {
    this.setState({ desiredWeight: e.target.value.replace(/,/g, '.') });
    const val = Number(e.target.value);

    if (val >= 30 && val <= 199) {
      this.setState({
        isError: false,
        errorDesiredWeight: false
      });
      document.querySelector('#submit').disabled = false;
    } else {
      this.setState({
        isError: true,
        errorDesiredWeight: true
      });
      document.querySelector('#submit').disabled = true;
    }
  };

  handleChangeGroupBlood = e => {
    this.setState({ groupBlood: e.target.value });
    const val = Number(e.target.value);

    if (val >= 1 && val <= 4 && Number.isInteger(val)) {
      this.setState({
        isError: false,
        errorGroupBlood: false
      });
      document.querySelector('#submit').disabled = false;
    } else {
      this.setState({
        isError: true,
        errorGroupBlood: true
      });
      document.querySelector('#submit').disabled = true;
    }
  };

  handleSubmit = () => {
    const { isError, height, age, currentWeight, desiredWeight, groupBlood } = this.state;
    const validation = height && age && currentWeight && desiredWeight;

    if (!isError && validation) {
      if (groupBlood) {
        this.toggleOpenModal();
        this.setState(
          {
            isError: false,
            errorGroupBlood: false,
            isValidAll: false
          },
          this.reset
        );
      } else {
        this.setState({
          isError: true,
          errorGroupBlood: true
        });
      }
    } else {
      this.setState({
        isError: true,
        isValidAll: true
      });
    }
  };

  toggleOpenModal = () => {
    this.setState(state => ({ isOpenModal: !state.isOpenModal }));
  };

  reset = () => {
    this.setState({
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      groupBlood: ''
    });
  };

  render() {
    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      errorHeight,
      errorAge,
      errorCurrentWeight,
      errorDesiredWeight,
      errorGroupBlood,
      isValidAll,
      groupBlood,
      isOpenModal
    } = this.state;
    const { session, data } = this.props;

    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.titleContainer}>
            <p className={css.title}>Узнай свою суточную </p>
            <p className={css.title}>норму калорий {!session.token && 'прямо сейчас'}</p>
          </div>
          <form>
            <div className={css.leftInputs}>
              <label htmlFor="height">
                <input
                  className={css.input}
                  id="height"
                  type="number"
                  placeholder="Рост, см *"
                  name="height"
                  value={height}
                  required
                  onChange={this.handleChangeHeight}
                />
                {errorHeight && <ErrorNotification label={'Введите целое число от 50 до 230'} />}
              </label>
              <label htmlFor="age">
                <input
                  className={css.input}
                  id="age"
                  type="number"
                  placeholder="Возраст *"
                  name="age"
                  value={age}
                  onChange={this.handleChangeAge}
                />
                {errorAge && <ErrorNotification label={'Введите целое число от 1 до 99'} />}
              </label>
              <label htmlFor="currentWeight">
                <input
                  className={css.input}
                  id="currentWeight"
                  type="number"
                  placeholder="Текущий вес, кг *"
                  name="currentWeight"
                  value={currentWeight}
                  onChange={this.handleChangeCurrentWeight}
                />
                {errorCurrentWeight && <ErrorNotification label={'Введите число от 30 до 199'} />}
              </label>
            </div>
            <div className={css.rightInputs}>
              <label htmlFor="desiredWeight">
                <input
                  className={css.input}
                  id="desiredWeight"
                  type="number"
                  placeholder="Желаемый вес, кг *"
                  name="desiredWeight"
                  value={desiredWeight}
                  onChange={this.handleChangeDesiredWeight}
                />
                {errorDesiredWeight && <ErrorNotification label={'Введите число от 30 до 199'} />}
              </label>
              <section className={css.radioContainer}>
                <h3>Группа крови *</h3>
                <div className={css.radioInputs}>
                  <label htmlFor="groupBlood_1" className={css.radio}>
                    1
                    <input
                      id="groupBlood_1"
                      type="radio"
                      name="groupBlood"
                      value={GroupBlood.FIRST_GROUP}
                      checked={groupBlood === GroupBlood.FIRST_GROUP}
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  <label htmlFor="groupBlood_2" className={css.radio}>
                    2
                    <input
                      id="groupBlood_2"
                      checked={groupBlood === GroupBlood.SECOND_GROUP}
                      type="radio"
                      name="groupBlood"
                      value={GroupBlood.SECOND_GROUP}
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  <label htmlFor="groupBlood_3" className={css.radio}>
                    3
                    <input
                      id="groupBlood_3"
                      checked={groupBlood === GroupBlood.THIRD_GROUP}
                      type="radio"
                      name="groupBlood"
                      value={GroupBlood.THIRD_GROUP}
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  <label htmlFor="groupBlood_4" className={css.radio}>
                    4
                    <input
                      id="groupBlood_4"
                      checked={groupBlood === GroupBlood.FOURTH_GROUP}
                      type="radio"
                      name="groupBlood"
                      value={GroupBlood.FOURTH_GROUP}
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  {errorGroupBlood && <ErrorNotification label={'Укажите группу крови'} />}
                </div>
              </section>
            </div>
          </form>
          {isValidAll && (
            <p className={css.errorForm}>
              <ErrorNotification label={'Заполните все поля калькулятора'} />
            </p>
          )}
          <button type="button" id="submit" className={css.btn} onClick={this.handleSubmit}>
            {!data.groupBlood ? 'Похудеть' : 'Пересчитать'}
          </button>
        </div>
        {isOpenModal && <Result {...this.state} onClose={this.toggleOpenModal} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session,
  data: state.data
});

export default connect(mapStateToProps)(CalcForm);
