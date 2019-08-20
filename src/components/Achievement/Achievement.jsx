import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { fetchUserAchevement, fetchQuote } from '../../utils/requests';
import { useWindowSize } from '../../utils/hooks';
import styles from './Achievement.module.css';

const initialData = {
  labels: [],
  datasets: [
    {
      label: 'Eated Products',
      fill: false,
      lineTension: 0.6,
      backgroundColor: '#284060',
      borderColor: '#284060',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#284060',
      pointBackgroundColor: '#284060',
      pointBorderWidth: 1,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#284060',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 5,
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]
};

const Achievement = () => {
  const [data, setData] = useState(initialData);
  const [quote, setQuote] = useState('');

  const { width } = useWindowSize();

  const graphWidth = width < 767 ? 270 : 600;
  const grapHeight = 333;
  console.log({ graphWidth });
  console.log(grapHeight);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    fetchUserAchevement(token, Date.now())
      .then(graphData => {
        setData(prev => {
          const newData = {
            ...prev,
            labels: graphData.labels,
            datasets: [
              {
                ...prev.datasets[0],
                data: graphData.eatedProducts
              }
            ]
          };

          if (
            graphData.dailyRate &&
            !graphData.dailyRate.every(el => el === 0)
          ) {
            newData.datasets[1] = {
              label: 'Daily Rate',
              fill: false,
              lineTension: 0.6,
              backgroundColor: '#fc842c',
              borderColor: '#fc842c',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: '#fc842c',
              pointBackgroundColor: '#fc842c',
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: '#fc842c',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 3,
              pointHitRadius: 5,
              data: graphData.dailyRate
            };
          }

          return newData;
        });
      })
      .catch(err => err);

    fetchQuote(token)
      .then(quoteFromServ => {
        setQuote(quoteFromServ.title.ru);
      })
      .catch(err => err);
  }, []);

  return (
    <>
      {width > 767 && <p className={styles.quote}>{quote}</p>}

      <h1 className={styles.achievement_h1}>
        Динамика употребления калорий за месяц
      </h1>

      <div
        style={{
          maxWidth: graphWidth,
          height: grapHeight
        }}
      >
        <Line
          data={data}
          // width="100%"
          // height={grapHeight}
          options={{
            tooltips: {
              mode: 'label'
            },
            label: false,
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              xAxes: [{ gridLines: { display: false } }],
              yAxes: [
                {
                  gridLines: { display: false }
                }
              ]
            }
          }}
        />
      </div>
    </>
  );
};

Achievement.propTypes = {};

export default Achievement;
