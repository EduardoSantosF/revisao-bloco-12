import React, { Component } from 'react';

import '../css/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      product: {
        price, title, thumbnail,
      },
    } = this.props;
    return (
      <div className="product-card">
        <div className="product-img">
          <img src={thumbnail} alt="product" />
        </div>
        <div className="product-info">
          <span>{ title }</span>
          <span>R${ price.toLocaleString() }</span>
        </div>
      </div>
    );
  }
}
