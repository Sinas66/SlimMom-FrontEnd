import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';
import { deleteProductFromProductListFunc, getProductsByDayAction } from '../../../redux/actions/productActions';
import EatedProductItem from './EatedProductItem/EatedProductItem';

const EatedProductsList = ({ productsByDay, isProductsByDayLoader, deleteProduct, getProdByDay }) => {

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const date = new Date().toISOString();
    getProdByDay(token, date);
  }, []);

  return (
    <>
      {productsByDay.length === 0 && <p>Здесь будет отображаться Ваш рацион</p>}
      {/* {isProductsByDayLoader && (
        <div className={styles.fetch_loader}>
          <Spinner
            name="pacman"
            style={{
              color: '#f47929',
              display: 'block',
              margin: '0 auto',
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
      )} */}

      {productsByDay && (
        <div className={styles.tBodyTable}>
          <Table className={styles.firstBlock}>
            <Tbody>
              {productsByDay.map(el => {
                return <EatedProductItem productItem={el} key={el._id} deleteProduct={deleteProduct} />;
              })}
            </Tbody>
          </Table>
        </div>
      )}
    </>
  );
};

EatedProductsList.propTypes = {
  productsByDay: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isProductsByDayLoader: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  getProdByDay: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isProductsByDayLoader: state.dailyBlock.isProductsByDayLoader,
  productsByDay: state.dailyBlock.productsByDay
});

const mapDispatchToProps = dispatch => ({
  deleteProduct: (token, id) => {
    dispatch(deleteProductFromProductListFunc(token, id))
  },
  getProdByDay: (token, date) => {
    dispatch(getProductsByDayAction(token, date))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EatedProductsList);

