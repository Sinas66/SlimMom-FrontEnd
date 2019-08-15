import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/en-au';
import { getProductsByDayAction } from '../../../redux/actions/productActions';
import { setDateAction } from '../../../redux/actions/datePickerActions'

import styles from './DatePicker.module.css';

const DatePicker = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.datePicker.date)

  const getProductsByDay = (token, date) => dispatch(getProductsByDayAction(token, date));
  const setDate = date => dispatch(setDateAction(date))
  const token = localStorage.getItem('userToken');


  const handleDateClick = e => {
    if (typeof e === 'object') {
      setDate(e._d)
      getProductsByDay(token, e._d.toISOString());
    }
  };



  return (
    <div className={styles.datePicker_wrapper}>
      <ReactDatetime
        value={date}
        locale={window.navigator.language}
        closeOnSelect
        onChange={handleDateClick}
      />
      <i className={styles.datePicker_icon} />
    </div>
  );
};

export default DatePicker;


