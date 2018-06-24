import React, { Component } from 'react';
import * as messages from './../constants/Message';

class Product extends Component {
    render() {
        var {product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                    <a>
                        <div className="mask waves-light waves-effect waves-light" />
                    </a>
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                        <a>{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            { this.showStar(product.star)}
                        </li>
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                        <a className="btn-floating blue-gradient" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            data-original-title="Add to Cart"
                            onClick={() => this.addToCart(product)}
                            >
                            <i className="fa fa-shopping-cart" />
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

    showStar = (star) => {
        var result = [];
        for(var i = 1; i <= star; i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= 5-star; j++){
            result.push(<i key={j+10} className="fa fa-star-o"></i>);
        }
        return result;
    }

    addToCart = product => {
        this.props.addToCart(product);
        this.props.onChangeMessage(messages.MSG_ADD_TO_CART_SUCCESS);
    }
}

export default Product;
