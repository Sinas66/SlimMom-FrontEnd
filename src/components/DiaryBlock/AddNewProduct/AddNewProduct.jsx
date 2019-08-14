import React, { useState } from 'react';
import { useWindowSize } from '../../../utils/hooks'
import { useDispatch } from 'react-redux';
import Selector from './ProductSelector/ProductSelector';
import styles from './AddNewProduct.module.css';
import { Add } from '../../../assets/icons';
import { addProductByDayAction, closeModalProductsAction } from '../../../redux/actions/productActions';

const AddNewProduct = () => {
  const { width, height } = useWindowSize();
  const isLandscape = width > height;
  const [productWeight, setProductWeight] = useState('');
  const [productId, setProductId] = useState('');

  const [productLabel, setProductLabel] = useState('');

  const dispatch = useDispatch();

  const handlerInputWeight = value => {
    if (/^[1-9]\d*(?:\.\d+)?(?:[kmbt])?$/g.test(value) || value === "") {
      setProductWeight(value);
    }
  };

  const handlerProductSelect = e => {
    setProductId(e.value);
  };

  const handlerAddButton = () => {
    if (productWeight !== '' && productId !== '') {
      const addUserEatedProduct = (token, id, weight) => dispatch(addProductByDayAction(token, id, weight));
      const closeModal = () => dispatch(closeModalProductsAction());
      const weight = Number(productWeight);
      const token = localStorage.getItem('userToken');
      addUserEatedProduct(token, productId, weight);
      setProductWeight('');
      setProductId('');
      setProductLabel('');
      closeModal();
    }
  };

  return (
    <div className={styles.addProduct_wrapper}>

      <Selector
        handlerInputWeight={handlerInputWeight}
        handlerProductSelect={handlerProductSelect}
        productLabel={productLabel}
        setProductLabel={setProductLabel}
      />

      <input
        id="gramms"
        // type="number"
        placeholder="Граммы"
        step={10}
        className={styles.inputProduct_weight}
        value={productWeight}
        onChange={e => handlerInputWeight(e.target.value)}
      />
      <label htmlFor="gramms" className={styles.hidden}>Граммы</label>



      <button onClick={handlerAddButton} type="button" className={styles.add_btn}>
        {width < 767 && !isLandscape ? 'Добавить' : <Add className={styles.addBtn_icon} />}
      </button>
    </div >
  );
};

export default AddNewProduct;
