import React, { useEffect, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemState, setItemState] = useState();
  useEffect(() => {
    setItemState(items);
    return () => null;
  }, [items]);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select 
          name="filter" 
          onChange={(ev) => ev.target.value === 'All' ? setItemState(items) : setItemState(items.filter(key => key.category === ev.target.value))}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemState.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
