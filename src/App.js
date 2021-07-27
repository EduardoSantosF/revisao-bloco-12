import React, { Component } from 'react';

import ProductCard from './components/ProductCard';
import Header from './components/Header';

import data from './data';

import './css/App.css';
import NewProduct from './components/NewProduct';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      products: data,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
  }

  handleSearch({ target: { value } }) {
    this.setState({ searchInput: value });
  }

  addNewProduct(product) {
    this.setState((prevState) => ({ products: [...prevState.products, product] }));
  }

  render() {
    const { searchInput, products } = this.state;
    return (
      <div className="main-page">
        <Header searchInput={searchInput} handleSearch={this.handleSearch} />
        <NewProduct addNewProduct={this.addNewProduct} teste="aa" />
        <div className="product-list">
          {
            products
              .filter((product) => product.title.includes(searchInput))
              .map((product) => <ProductCard product={product} key={product.title} />)
          }
        </div>
      </div>
    );
  }
}
