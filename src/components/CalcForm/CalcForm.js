import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorNotification from './ErrorNotification';
import css from './CalcForm.module.css';

class CalcForm extends Component {
  static propTypes = {
    isLogin: PropTypes.bool,
    height: PropTypes.string,
    age: PropTypes.string,
    currentWeight: PropTypes.string,
    desireWeight: PropTypes.string,
    groupBlood: PropTypes.string
  };

  static defaultProps = {
    isLogin: false,
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
    groupBlood: ''
  };

  state = {
    height: this.props.height,
    age: this.props.age,
    currentWeight: this.props.currentWeight,
    desireWeight: this.props.desireWeight,
    groupBlood: this.props.groupBlood,
    errorHeight: false,
    errorAge: false,
    errorCurrentWeight: false,
    errorDesireWeight: false,
    errorGroupBlood: false,
    isOpenModal: false,
    isError: false,
    isValidAll: false
  };

  handleChangeHeight = e => {
    this.setState({ height: e.target.value });
    const val = Number(e.target.value);

    if (val >= 1 && val <= 230 && Number.isInteger(val)) {
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
    this.setState({ currentWeight: e.target.value });
    const val = Number(e.target.value);

    if (val >= 1 && val <= 199 && Number.isInteger(val)) {
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

  handleChangeDesireWeight = e => {
    this.setState({ desireWeight: e.target.value });
    const val = Number(e.target.value);

    if (val >= 1 && val <= 199 && Number.isInteger(val)) {
      this.setState({
        isError: false,
        errorDesireWeight: false
      });
      document.querySelector('#submit').disabled = false;
    } else {
      this.setState({
        isError: true,
        errorDesireWeight: true
      });
      document.querySelector('#submit').disabled = true;
    }
  };

  handleChangeGroupBlood = e => {
    this.setState({ groupBlood: e.target.value });
    const val = Number(e.target.value);

    if (val && val >= 1 && val <= 4 && Number.isInteger(val)) {
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
    const { isError, height, age, currentWeight, desireWeight, groupBlood } = this.state;
    const validation = height && age && currentWeight && desireWeight;

    if (!isError && validation) {
      if (groupBlood) {
        this.toggleOpenModal();
        this.setState({
          isError: false,
          errorGroupBlood: false,
          isValidAll: false
        });
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

  render() {
    const {
      height,
      age,
      currentWeight,
      desireWeight,
      errorHeight,
      errorAge,
      errorCurrentWeight,
      errorDesireWeight,
      errorGroupBlood,
      isValidAll,
      isOpenModal
    } = this.state;
    const { groupBlood, isLogin } = this.props;

    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.titleContainer}>
            <p className={css.title}>Узнай свою суточную </p>
            <p className={css.title}>норму калорий{isLogin && 'прямо сейчас'}</p>
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
                  required
                  onChange={e => this.handleChangeHeight(e)}
                />
                {errorHeight && <ErrorNotification label={'Введите целое число от 1 до 230'} />}
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
                  placeholder="Текущий вес *"
                  name="currentWeight"
                  value={currentWeight}
                  onChange={this.handleChangeCurrentWeight}
                />
                {errorCurrentWeight && <ErrorNotification label={'Введите целое число от 1 до 199'} />}
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
                  onChange={this.handleChangeDesireWeight}
                />
                {errorDesireWeight && <ErrorNotification label={'Введите целое число от 1 до 199'} />}
              </label>
              <section className={css.radioContainer}>
                <h3>Группа крови *</h3>
                <div className={css.radioInputs}>
                  <label htmlFor="groupBlood_1">
                    1
                    <input
                      id="groupBlood_1"
                      type="radio"
                      name="groupBlood"
                      value="1"
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  <label htmlFor="groupBlood_2">
                    2
                    <input
                      id="groupBlood_2"
                      type="radio"
                      name="groupBlood"
                      value="2"
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  <label htmlFor="groupBlood_3">
                    3
                    <input
                      id="groupBlood_3"
                      type="radio"
                      name="groupBlood"
                      value="3"
                      onChange={this.handleChangeGroupBlood}
                    />
                  </label>
                  <label htmlFor="groupBlood_4">
                    4
                    <input
                      id="groupBlood_4"
                      type="radio"
                      name="groupBlood"
                      value="4"
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
            {!groupBlood ? 'Начать худеть' : 'Пересчитать'}
          </button>
        </div>
      </div>
    );
  }
}

export default CalcForm;
