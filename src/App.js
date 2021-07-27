import React, { Component } from 'react';

import ProductCard from './components/ProductCard';
import Header from './components/Header';

import data from './data';

import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="product-list">
          {
            data.map((product) => <ProductCard product={product} key={product.title} />)
          }
        </div>
      </div>
    );
  }
}
