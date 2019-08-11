import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import AddNewProduct from './AddNewProduct/AddNewProduct';
import DatePicker from './DatePicker/DatePicker';
import EatedProductsList from './EatedProductsList/EatedProductsList';
import AddNewProductModal from './AddNewProductModal/AddNewProductModal';
import ToogleModalButton from './ToogleModalButton/ToogleModalButton';
import styles from './DiaryBlock.module.css';

const DiaryBlock = ({ windowWidth, isModalShowed }) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.diaryBlock_wrapper}>
      <DatePicker />
      {windowWidth > 767 && <AddNewProduct />}
      <EatedProductsList />

      {isModalShowed && windowWidth < 767 && (
        <AddNewProductModal>
          <AddNewProduct />
        </AddNewProductModal>
      )}

      {!isModalShowed && windowWidth < 767 && <ToogleModalButton />}
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dis => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(DiaryBlock));

DiaryBlock.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  isModalShowed: PropTypes.bool.isRequired
};
