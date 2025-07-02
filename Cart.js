import React from 'react';

function Cart({ items, onRemove, onUpdateQuantity }) {
  const total = items.reduce(
    (sum, item) => sum + (item.price * item.quantity * 80), 
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart ({items.length})</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="50" />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <p>₹{(item.price * item.quantity * 80).toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => onRemove(item.id)} 
                  className="remove-btn"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;