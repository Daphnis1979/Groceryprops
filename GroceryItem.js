import React from "react";

function GroceryItem(props) {
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        <li>
          <button
            onClick={alert(`you have added ${props.groceryItem1} to your cart`)}
          >
            {props.groceryItem1}
          </button>
        </li>
        <li>
          <button
            onClick={alert(`you have added ${props.groceryItem2} to your cart`)}
          >
            {props.groceryItem2}
          </button>
        </li>
        <li>
          <button
            onClick={alert(`you have added ${props.groceryItem3} to your cart`)}
          >
            {props.groceryItem3}
          </button>
        </li>
        <li>
          <button
            onClick={alert(`you have added ${props.groceryItem4} to your cart`)}
          >
            {props.groceryItem4}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default GroceryItem;
