import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Tbody } from 'react-super-responsive-table';
import Spinner from 'react-spinkit';
import styles from './EatedProductsList.module.css';
import { deleteProductFromProductListFunc } from '../../../redux/actions/productActions';
import EatedProductItem from './EatedProductItem/EatedProductItem';

const EatedProductsList = ({ productsByDay, isProductsByDayLoader, deleteProduct }) => {
  useEffect(() => {});

  return (
    <>
      {productsByDay.length === 0 && <h1>Вы ничего не ели! Обязательно перекусите!!!</h1>}
      {isProductsByDayLoader && (
        <div className={styles.fetch_loader}>
          <Spinner
            name="pacman"
            style={{
              color: 'red',
              display: 'block',
              margin: '0 auto'
            }}
          />
        </div>
      )}

      {!isProductsByDayLoader && (
        <Table className={styles.firstBlock}>
          <Tbody>
            {productsByDay.map(el => {
              return <EatedProductItem productItem={el} key={el._id} deleteProduct={deleteProduct} />;
            })}
          </Tbody>
        </Table>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isProductsByDayLoader: state.dailyBlock.isProductsByDayLoader,
  productsByDay: state.dailyBlock.productsByDay
});
export default connect(
  mapStateToProps,
  { deleteProduct: deleteProductFromProductListFunc }
)(EatedProductsList);

EatedProductsList.propTypes = {
  productsByDay: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isProductsByDayLoader: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired
};
