import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as messages from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actUpdateQuantity, actChangeMessage, actDeleteProduct } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showCartResult(cart) }
            </Cart>
        );
    }

    showCartItem = cart => {
        if(cart.length > 0){
            var { onUpdateQuantity, onChangeMessage, onDeleteProduct } = this.props;
            var result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        index={index}
                        onUpdateQuantity={onUpdateQuantity}
                        onChangeMessage={onChangeMessage}
                        onDeleteProduct={onDeleteProduct}
                    />
                );
            });
            return result
        }else{
            return (
                <tr><td colSpan={6}> ${messages.MSG_CART_EMPTY} </td></tr>
           );
        }
    }

    showCartResult = cart => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

/** 
 * kiểm tra ràng buộc props
 */
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id: PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            star: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateQuantity : (product, quantity) => {
            dispatch(actUpdateQuantity(product, quantity));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onDeleteProduct: (product) => {
            dispatch(actDeleteProduct(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
