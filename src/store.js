import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { counterReducer } from './components/Counter/reducer';

const loggerMiddleware = createLogger();

export default createStore(counterReducer, applyMiddleware(loggerMiddleware));