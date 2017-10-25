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
        <div className="divider"><hr></hr></div>
        <ProductsSection />
      </div>
    );
  }
}

export default App;
