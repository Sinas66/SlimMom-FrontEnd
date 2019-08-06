import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addStore } from '../../redux/actions/productActions';
import { pushNewData } from '../../utils/requests';
import styles from './Result.module.css';

class Result extends Component {
  state = {
    currentWeight: 280,
    height: 153,
    age: 39,
    desireWeight: 60,
    groupBlood: 1,
    dailyRate: 0,
    isOpen: false
  };
  backdropRef = createRef();

  componentWillMount() {
    this.onHandleCalc();
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  componentDidMount() {
    this.onHandlePost();
  }

  // componentDidUpdate(prevState) {
  //   const { dailyRate } = this.state;
  //   if (prevState.dailyRate === dailyRate) return;
  //   this.onHandlePost();
  // }

  onHandleCalc = () => {
    const { currentWeight, age, height, desireWeight } = this.state;

    this.setState({
      dailyRate: 10 * Number(currentWeight) + 6.25 * Number(height) - 5 * Number(age) - 161 - 10 * Number(desireWeight)
    });
  };

  onHandlePost = () => {
    const { add, session, newInfo } = this.props;
    const { groupBlood, dailyRate } = this.state;
    const newData = {
      groupBlood,
      dailyRate
    };
    if (session.token) {
      return newInfo(session.token, newData);
    }
    return add(newData);
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;
    const { dailyRate, groupBlood } = this.state;
    let arr = [];
    if (groupBlood == '1') {
      arr = ['яйца', 'зерновые', 'мучные изделия', 'молочные продукты'];
    } else if (groupBlood == '2') {
      arr = ['красное мясо', 'изделия из пшеничной муки', 'молочные продукты'];
    } else if (groupBlood == '3') {
      arr = ['кукуруза', 'гречка', 'арахис', 'чечевица', 'изделия из пшеничной муки'];
    } else {
      arr = ['гречка', 'кукуруза', 'красное мясо', 'фасоль', 'мучные изделия', 'орехи'];
    }

    return (
      <>
        <div className={styles.backdrop} ref={this.backdropRef} onClick={this.handleBackdropClick}>
          <div className={styles.modal}>
            <div className={styles.bgButtonColor}>
              <button className={styles.arrow} onClick={onClose} type="button">
                &crarr;
              </button>
              <button className={styles.cross} onClick={onClose} type="button">
                &crarr;
              </button>
            </div>
            <div className={styles.main}>
              <h2 className={styles.title}>Ваша рекомендуемая суточная норма калорий составляет:</h2>
              <p className={styles.dailyRate}>
                {dailyRate.toFixed()}
                <span className={styles.ccal}>ккал</span>
              </p>
              <h2 className={styles.subTitle}>Продукты, которые вам не рекомендуется употреблять:</h2>
              <ol className={styles.menu}>
                {arr.map((el, i) => (
                  <li className={styles.listItem} key={i}>
                    {el}
                  </li>
                ))}
              </ol>
              <button type="button" className={styles.start}>
                Начать худеть
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  add: store => dispatch(addStore(store)),
  newInfo: (token, data) => dispatch(pushNewData(token, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
