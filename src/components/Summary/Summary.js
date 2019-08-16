import React, { useState, useEffect } from 'react';
import style from './Summery.module.css';
import { connect } from 'react-redux';
import { getDailyRate, getDate, getProducts, getGroupBlood } from './selectors';
import { getProductsByGroupBlood, getCcalSumm } from './constants';
import PropTypes from 'prop-types';
import moment from 'moment';

function Summary({ products, date, groupBlood, dailyRate }) {
  const [ссalSumm, setCсalSumm] = useState(0);
  const [productsList, setProductsList] = useState([]);
  console.log(date);

  useEffect(() => {
    if (products) setCсalSumm(getCcalSumm(products));
    setProductsList(getProductsByGroupBlood(groupBlood));
  });

  return (
    <div className={style.summarySection}>
      <div>
        <h3>Сводка за {moment(date).format('MM.DD.Y')}</h3>
        <ul className={style.listSummery}>
          <li>
            <p>Осталось</p>
            <p>{(dailyRate - ссalSumm).toFixed(0)} ккал</p>
          </li>
          <li>
            <p>Употреблено</p>
            <p>{ссalSumm} ккал</p>
          </li>
          <li>
            <p>Дневная норма</p>
            <p>{dailyRate.toFixed(0)} ккал</p>
          </li>
          <li>
            <p>n% от нормы</p>
            <p>{(ссalSumm * (100 / dailyRate)).toFixed(0)} %</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Продукты, которые вам не рекомендуется употреблять:</h3>
        <p className={style.pSummery}>{productsList}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  products: getProducts(state),
  date: getDate(state),
  groupBlood: getGroupBlood(state),
  dailyRate: getDailyRate(state)
});

Summary.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      ccal: PropTypes.number
    })
  ),
  date: PropTypes.string,
  groupBlood: PropTypes.number,
  dailyRate: PropTypes.number
};

export default connect(
  mapStateToProps,
  null
)(Summary);
