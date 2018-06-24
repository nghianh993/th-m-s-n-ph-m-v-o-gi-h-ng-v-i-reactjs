import * as types from './../constants/ActionType';

// action là một arrow function có hoặc không có các tham số
export const actAddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product, //tương tự product:product
        quantity //tương tự quantity : quantity 
    }
}

export const actUpdateQuantity = (product, quantity) => {
    return {
        type : types.UPDATE_QUANTITY,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProduct = (product) => {
    return {
        type : types.DELETE_PRODUCT,
        product
    }
}