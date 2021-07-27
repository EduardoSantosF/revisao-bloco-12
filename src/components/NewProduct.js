import React, { Component } from 'react';

import '../css/NewProduct.css';

export default class NewProduct extends Component {
  render() {
    return (
      <form className="new-product-form">
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="price">
          Price:
          <input type="number" name="price" id="price" />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input type="text" name="thumbnail" id="thumbnail" />
        </label>
        <button type="submit">Add product</button>
      </form>
    );
  }
}
