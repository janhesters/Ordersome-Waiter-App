import Config from 'react-native-config';
import { applyMiddleware, createStore } from 'redux';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import logger from 'redux-logger';
import reducers from '../reducers';

const configureStore = () => {
  const middlewares = [batchDispatchMiddleware];
  if (Config.REACT_ENVIRONMENT === 'staging') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(reducers, middlewareEnhancer);
  return store;
};

export default configureStore;
