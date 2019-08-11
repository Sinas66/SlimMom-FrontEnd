import React from 'react';
import PropTypes from 'prop-types';

const ShowModalButton = ({ toogleModal }) => {
  return (
    <div>
      <button type="button" onClick={toogleModal}>
        Открыть модалку
      </button>
    </div>
  );
};

ShowModalButton.propTypes = {
  toogleModal: PropTypes.func.isRequired
};

export default ShowModalButton;
