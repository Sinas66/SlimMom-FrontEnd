import React, { Component } from 'react';
import style from './Home.module.css';
// import CalcForm from '../../components/CalcForm/CalcForm';
// import Result from '../../components/Result/Result';
// import Header from '../../components/Header/Header';

class Home extends Component {
  state = {
    isOpenModal: false
  };
  handleToggleModal = () => {
    this.setState(state => ({
      isOpenModal: !state.isOpenModal
    }));
  };
  render() {
    const { isOpenModal } = this.state;
    return (
      <div className={style.homeWrapper}>
        {/* <Header/>
        <CalcForm />
        {isOpenModal && <Result onClose={this.handleToggleModal} />} */}
        <button onClick={this.handleToggleModal} type="button" className={style.calc}>
          Похудеть
        </button>
      </div>
    );
  }
}

export default Home;
