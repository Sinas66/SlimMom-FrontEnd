import React from 'react';
import PropTypes from 'prop-types';
import ReactDatetime from 'react-datetime';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/en-au';

import styles from './DatePicker.module.css';

const DatePicker = ({ handleDate }) => {
  return (
    <div className={styles.datePicker_wrapper}>
      <ReactDatetime
        defaultValue={new Date()}
        timeFormat={false}
        locale={window.navigator.language}
        closeOnSelect
        onChange={handleDate}
      />
      {/* <i className={styles.datePicker_icon} /> */}
    </div>
  );
};
DatePicker.propTypes = {
  handleDate: PropTypes.func.isRequired
};
DatePicker.defaultProps = {};
export default DatePicker;
