import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorNotification from './ErrorNotification';
import css from './CalcForm.module.css';

const GroupBlood = {
  FIRST_GROUP: '1',
  SECOND_GROUP: '2',
  THIRD_GROUP: '3',
  FOURTH_GROUP: '4'
}

class CalcForm extends Component {
  static propTypes = {
    isLogin: PropTypes.bool,
    isCounted: PropTypes.bool,
    height: PropTypes.string,
    age: PropTypes.string,
    currentWeight: PropTypes.string,
    desireWeight: PropTypes.string,
    groupBlood: PropTypes.string
  };

  static defaultProps = {
    isLogin: true,
    isCounted: true,
    height: '',
    age: '',
    currentWeight: '',
    desireWeight: '',
    groupBlood: null
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

    if (val >= 1 && val <= 199) {
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

    if (val >= 1 && val <= 199) {
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
    // const { name, value } = e.target;
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
      groupBlood,
      isOpenModal
    } = this.state;
    const { isLogin, isCounted } = this.props;

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
                  max="3"
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
                {errorCurrentWeight && <ErrorNotification label={'Введите число от 1 до 199'} />}
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
                {errorDesireWeight && <ErrorNotification label={'Введите число от 1 до 199'} />}
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
            {!isCounted ? 'Начать худеть' : 'Пересчитать'}
          </button>
        </div>
      </div>
    );
  }
}

export default CalcForm;
