import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContrainer from './containers/ProductsContrainer';
import MessageContainer from './containers/MessageContainer';
import CartContrainer from './containers/CartContrainer';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContrainer />
                        <MessageContainer />
                        <CartContrainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
