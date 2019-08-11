import React from 'react';
import style from './Summery.module.css';
import { connect } from 'react-redux';
import { getDailyRate, getDate, getProducts, getGroupBlood } from './selectors';
import { getProductsByGroupBlood, getCcalSumm} from './constants';
import PropTypes from 'prop-types';
import moment from 'moment';

const Summary = ({ products, date, groupBlood, dailyRate }) =>
    <div className={style.summarySection}>
        <div>
            <h3>Сводка за {moment(date).format("MM.DD.YYYY")}</h3>
            <ul className={style.listSummery}>
                <li>
                    <p>Осталось</p>
                    <p>{dailyRate - getCcalSumm(products)} ккал</p>
                </li>
                <li>
                    <p>Употреблено</p>
                    <p>{getCcalSumm(products)} ккал</p>
                </li>
                <li>
                    <p>Дневная норма</p>
                    <p>{dailyRate} ккал</p>
                </li>
                <li>
                    <p>n% от нормы</p>
                    <p>{(getCcalSumm(products) * (100 / dailyRate)).toFixed(0)} %</p>
                </li>
            </ul>
        </div>
        <div>
            <h3>Продукты, которые вам не рекомендуется употреблять:</h3>
            <p className={style.pSummery}>{getProductsByGroupBlood(groupBlood)}</p>
        </div>
    </div>
const mapStateToProps = (state) => (
    {
        products: getProducts(state),
        date: getDate(state),
        groupBlood: getGroupBlood(state),
        dailyRate: getDailyRate(state),
    }
)
Summary.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        ccal: PropTypes.number,
    })),
    date: PropTypes.string,
    groupBlood: PropTypes.number,
    dailyRate: PropTypes.number,
}

export default connect(mapStateToProps, null)(Summary);