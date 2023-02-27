import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddedToCart] = useState(false)
  return (
    <li className={addedToCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add" 
        style={{ background: addedToCart ? 'pink' : '' }} 
        onClick={() => setAddedToCart(!addedToCart)}>
          {addedToCart ? 'Remove from' : 'Add to'} Cart
      </button>
    </li>
  );
}

export default Item;
