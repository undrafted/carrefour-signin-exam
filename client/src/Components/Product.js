import React, { Component } from 'react';
import './Product/Product.css';


class Product extends Component {
  render() {

    console.log();
    return (
        <div className='Product'>
          <img src={this.props.src} alt='product'></img>
          <div className='product-name'>{this.props.name}</div>
          <div className='product-price'>{this.props.price}</div>
        </div>
    );
  }
}

export default Product;
