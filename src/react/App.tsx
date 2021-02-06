import React from "react";

const shoppingList = [
  { ingredient: "eggs", quantity: "2" },
  { ingredient: "flour", quantity: "400g" },
  { ingredient: "avocados", quantity: "excessively many" },
];

const mappedShoppingList = shoppingList.map(
  (item) => `${item.quantity} ${item.ingredient}`
);

function App() {
  return (
    <div>
      <h1>My shopping list</h1>
      <p>I am going to buy the following:</p>
      <p>{mappedShoppingList.join(", ")}</p>
    </div>
  );
}

export default App;
