import React from 'react';
import PropTypes from 'prop-types';

const AddNewProductModal = ({ children }) => {
  return <div>{children}</div>;
};

AddNewProductModal.propTypes = {
  children: PropTypes.shape({}).isRequired
};

export default AddNewProductModal;
