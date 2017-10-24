import React, { Component } from 'react';
import './App/App.css';

import Navbar from './Navbar';
import SignInForm from './SignInForm';
import ProductsSection from './ProductsSection';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <SignInForm />
        <hr className='divider'></hr>
        <ProductsSection />
      </div>
    );
  }
}

export default App;
