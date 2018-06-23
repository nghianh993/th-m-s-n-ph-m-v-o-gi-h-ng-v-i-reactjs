// combine các reducer của dự án lại thông qua combineReducers trong redux
import {combineReducers} from 'redux';
import product from './product';

const appReducers = combineReducers({
    product // same product : product
});

export default appReducers;