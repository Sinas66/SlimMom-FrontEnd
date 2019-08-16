import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from '../../utils/hooks'
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './DatePicker/DatePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList'
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ShowModalButton from './ShowModalButton/ShowModalButton';
import { getProductsByDayAction } from '../../redux/actions/productActions';

import styles from './DiaryBlock.module.css';

const DiaryBlock = () => {
  const isModalShowed = useSelector(state => state.dailyBlock.isModalProductShowed);
  const { width, height } = useWindowSize();
  const isLandscape = width > height;

  const dispatch = useDispatch();
  const getProductsByDay = (token, date) => dispatch(getProductsByDayAction(token, date));

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const date = new Date();
    getProductsByDay(token, date);
  }, []);

  return (
    <div className={styles.diaryBlock_wrapper}>
      {(!isModalShowed || width > 767 || isLandscape) && <DatePicker />}

      {(width > 767 || isLandscape) && <AddNewProduct />}

      {(!isModalShowed || width > 767 || isLandscape) && <EatedProductsList />}

      {isModalShowed && width < 767 && !isLandscape && (
        <AddNewProductModal>
          <AddNewProduct />
        </AddNewProductModal>
      )}

      {!isModalShowed && (width < 767 && !isLandscape) && <ShowModalButton />}
    </div>
  );
};

export default DiaryBlock;
