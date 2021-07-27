import React, { Component } from 'react';

import '../css/NewProduct.css';

export default class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: 0,
      thumbnail: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState((state, props) => {
      console.log(props);
      return { [name]: value }
    });
  }

  handleSubmit(e) {
    const { addNewProduct } = this.props;
    e.preventDefault();
    addNewProduct(this.state);
  }

  render() {
    const { state: { title, price, thumbnail }, handleChange, handleSubmit } = this;
    return (
      <form className="new-product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" onChange={handleChange} value={title} />
        </label>
        <label htmlFor="price">
          Price:
          <input type="number" name="price" id="price" onChange={handleChange} value={price} />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input type="text" name="thumbnail" id="thumbnail" onChange={handleChange} value={thumbnail} />
        </label>
        <button type="submit">Add product</button>
      </form>
    );
  }
}
