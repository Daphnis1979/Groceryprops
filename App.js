import React from "react";
import GroceryItem from "./GroceryItem";

function App() {
  return (
    <div>
      <GroceryItem
        groceryItem1="loaf of bread"
        groceryItem2="container of milk"
        groceryItem3="stick of butter"
        groceryItem4="Your mom"
      />
    </div>
  );
}

export default App;
