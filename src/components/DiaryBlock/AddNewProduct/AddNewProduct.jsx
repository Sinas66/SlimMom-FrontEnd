import React from 'react';
import PropTypes from 'prop-types';

const AddNewProduct = ({ toogleModal }) => {
  return (
    <div>
      <button onClick={null} type="button">
        Add product
      </button>

      {/* Удалить тугл модал, она будет в хедере! */}
      {toogleModal && (
        <button onClick={toogleModal} type="button">
          закрыть модалку
        </button>
      )}
    </div>
  );
};

AddNewProduct.propTypes = {
  toogleModal: PropTypes.func
};

AddNewProduct.defaultProps = {
  toogleModal: () => {}
};

export default AddNewProduct;
