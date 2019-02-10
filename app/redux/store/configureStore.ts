import Config from 'react-native-config';
import { applyMiddleware, createStore } from 'redux';
import { batchDispatchMiddleware } from 'redux-batched-actions';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['orders']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const configureStore = () => {
  const middlewares = [batchDispatchMiddleware];
  if (Config.REACT_ENVIRONMENT === 'staging') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(persistedReducer, middlewareEnhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
