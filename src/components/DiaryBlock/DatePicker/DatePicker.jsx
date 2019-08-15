import React from 'react';
import { useDispatch } from 'react-redux';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/en-au';

import { getProductsByDayAction } from '../../../redux/actions/productActions';

import styles from './DatePicker.module.css';

const DatePicker = () => {
  const dispatch = useDispatch();
  const getProductsByDay = (token, date) => dispatch(getProductsByDayAction(token, date));
  const token = localStorage.getItem('userToken');


  const handleDateClick = e => {
    if (typeof e === 'object') {
      getProductsByDay(token, e._d.toISOString());
    }
  };

  return (
    <div className={styles.datePicker_wrapper}>
      <ReactDatetime
        defaultValue={new Date()}
        locale={window.navigator.language}
        closeOnSelect
        onChange={handleDateClick}
      />
      <i className={styles.datePicker_icon} />
    </div>
  );
};

export default DatePicker;
