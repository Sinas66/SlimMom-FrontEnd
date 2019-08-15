import React, { useState } from 'react';
import { useWindowSize } from '../../../utils/hooks'
import { useDispatch, useSelector } from 'react-redux';
import Selector from './ProductSelector/ProductSelector';
import styles from './AddNewProduct.module.css';
import Icon from '../../Icon/Icon';
import { addProductByDayAction, closeModalProductsAction } from '../../../redux/actions/productActions';

const AddNewProduct = () => {
  const { width, height } = useWindowSize();
  const isLandscape = width > height;
  const [productWeight, setProductWeight] = useState('');
  const [productId, setProductId] = useState('');
  const [productLabel, setProductLabel] = useState('');

  const dispatch = useDispatch();
  const [inputWeightClasses, setInputWeightClasses] = useState([styles.inputWeight_label]);
  const date = useSelector(state => state.datePicker.date)


  const handlerInputWeight = value => {
    if ((/^[1-9]\d*(?:\.\d+)?(?:[kmbt])?$/g.test(value) || value === "") && Number(value) <= 1000) {
      setProductWeight(value);
    }
    if (value === "") {
      setInputWeightClasses([styles.inputWeight_label])
    } else {
      setInputWeightClasses([styles.inputWeight_label, styles.inputHasValue])
    }
  };

  const handlerProductSelect = e => {
    setProductId(e.value);
  };

  const handlerAddButton = () => {
    if (productWeight !== '' && productId !== '') {
      const addUserEatedProduct = (token, id, weight) => dispatch(addProductByDayAction(token, id, weight));
      const closeModal = () => dispatch(closeModalProductsAction());
      // const weight = Number(productWeight);
      const eatedProd = {
        date: date.toISOString(),
        weight: Number(productWeight)
      }
      const token = localStorage.getItem('userToken');
      addUserEatedProduct(token, productId, eatedProd);
      setProductWeight('');
      setProductId('');
      setProductLabel('');
      closeModal();
    }
  };

  return (
    <form className={styles.addProduct_wrapper}>

      <Selector
        handlerInputWeight={handlerInputWeight}
        handlerProductSelect={handlerProductSelect}
        productLabel={productLabel}
        setProductLabel={setProductLabel}
        productWeight={productWeight}
      />

      <div className={styles.inputWeight_wrapper}>
        <label htmlFor="gramms" className={inputWeightClasses.join(' ')}>Граммы</label>
        <input
          id="gramms"
          type="text"
          className={styles.inputProduct_weight}
          value={productWeight}
          onChange={e => handlerInputWeight(e.target.value)}
        />
      </div>

      <button onClick={handlerAddButton} type="button" className={styles.add_btn}>
        {width < 767 && !isLandscape ? 'Добавить' : <Icon icon="Add" className={styles.addBtn_icon} />}
      </button>
    </form >
  );
};

export default AddNewProduct;
