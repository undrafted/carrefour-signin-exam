import React, { Component } from 'react';
import './Navbar/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <img src={'../assets/carrefour-logo.png'} alt='carrefour' className="logo"></img>
        <form className="searchbar-form">
          <input type="search" placeholder="Search"></input>
        </form>
      </div>
    );
  }
}

export default Navbar;
