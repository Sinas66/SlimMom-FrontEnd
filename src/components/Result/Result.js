import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStore } from '../../redux/actions/resultAction';
import styles from './Result.module.css';

class Result extends Component {
  state = {
    currentWeight: 88,
    height: 181,
    age: 24,
    desireWeight: 77,
    bloodGroup: 4,
    ccalForMeta: 0
  };

  componentDidMount() {
    this.onHandleCalc();
  }

  componentDidUpdate(prevProps, prevState) {
    const { ccalForMeta } = this.state;
    if (prevState.ccalForMeta === ccalForMeta) return;
    this.onHandlePost();
  }

  onHandleCalc = () => {
    const { currentWeight, age, height, desireWeight, bloodGroup, ccalForMeta } = this.state;

    this.setState({
      ccalForMeta:
        10 * Number(currentWeight) + 6.25 * Number(height) - 5 * Number(age) - 161 - 10 * Number(desireWeight)
    });
  };

  onHandlePost = () => {
    const { add } = this.props;
    const { currentWeight, age, height, desireWeight, bloodGroup, ccalForMeta } = this.state;

    add({ currentWeight, age, height, desireWeight, bloodGroup, ccalForMeta });
  };

  render() {
    const { ccalForMeta, bloodGroup } = this.state;
    let arr = [];
    if (bloodGroup == '1') {
      arr = ['яйца', 'зерновые', 'мучные изделия', 'молочные продукты'];
    } else if (bloodGroup == '2') {
      arr = ['красное мясо', 'изделия из пшеничной муки', 'молочные продукты'];
    } else if (bloodGroup == '3') {
      arr = ['кукуруза', 'гречка', 'арахис', 'чечевица', 'изделия из пшеничной муки'];
    } else {
      arr = ['гречка', 'кукуруза', 'красное мясо', 'фасоль', 'мучные изделия', 'орехи'];
    }

    return (
      <div>
        <h2 class={styles.title}>Ваша рекомендуемая суточная норма калорий составляет:</h2>
        <p>{ccalForMeta}</p>
        <h2>Продукты, которые вам не рекомендуется употреблять:</h2>
        {arr.map(el => (
          <ul>
            <li>{el}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state.result
});

const mapDispatchToProps = dispatch => ({
  add: store => dispatch(addStore(store))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
