import React, { Component } from 'react';
import style from './Home.module.css';
// import CalcForm from '../../components/CalcForm/CalcForm';
// import Result from '../../components/Result/Result';
// import Header from '../../components/Header/Header';
// import UserBar from '../../components/UserBar/UserBar';

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
      <div className={style.homeContainer}>
        <div className={style.homeGroup}>
            {/* <Header />
            <UserBar />
            <CalcForm />
          <div>{isOpenModal && <Result onClose={this.handleToggleModal} />}</div> */}
        </div>
      </div>
    );
  }
}

export default Home;
