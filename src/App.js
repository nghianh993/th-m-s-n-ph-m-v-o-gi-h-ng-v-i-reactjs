import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContrainer from './containers/ProductsContrainer';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContrainer />
                        <Message />
                        <Cart />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
