import React, {Component} from 'react';
import './ProductsSection/ProductsSection.css';
import Product from './Product';

class ProductsSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          src: '../assets/product-logo.png',
          name: 'iPhone 6 Black',
          price: 'AED 1000'
        }, {
          src: '../assets/product-logo.png',
          name: 'iPhone 7 Black',
          price: 'AED 2000'
        }, {
          src: '../assets/product-logo.png',
          name: 'iPhone 8 Black',
          price: 'AED 3000'
        }
      ]
    };
  }

  render() {
    return (
      <div className='ProductsSection'>
        {
          this.state.products.map((product) => <Product src={product.src} name={product.name} price={product.price}/>
        )}
      </div>
    );
  }
}

export default ProductsSection;
