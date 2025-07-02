import React from 'react';

function Header({ cartCount, onSearch }) {
  return (
    <header className="header">
      <div className="logo">Flipkart</div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for products..." 
          onChange={(e) => onSearch(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="cart-icon">
         {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </header>
  );
}

export default Header;