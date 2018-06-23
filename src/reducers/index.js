// combine các reducer của dự án lại thông qua combineReducers trong redux
import {combineReducers} from 'redux';
import products from './products';

const appReducers = combineReducers({
    products // same products : products
});

export default appReducers;