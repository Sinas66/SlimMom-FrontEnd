import rootReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleWares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;


// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

// export class store extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(store)
