import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Product/Product.css';

class Product extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }

  render() {
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
