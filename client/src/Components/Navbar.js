import React, { Component } from 'react';
import './Navbar/Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <img src={'../assets/carrefour-logo.png'} alt='carrefour'></img>
        <form className='searchbar' action='#'>
          <div id='label'><label htmlFor='search-btn' id='search-label'></label></div>
          <div id='input'><input type='text' name='search' id='search-btn' placeholder='Enter product name...'/></div>
        </form>
      </div>
    );
  }
}

export default Navbar;
