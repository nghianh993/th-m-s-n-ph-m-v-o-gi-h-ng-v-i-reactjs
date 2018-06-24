// combine các reducer của dự án lại thông qua combineReducers trong redux
import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

const appReducers = combineReducers({
    products, // same products : products
    cart,
    message
});

export default appReducers;