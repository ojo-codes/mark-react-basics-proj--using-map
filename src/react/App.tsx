import { mappedShoppingListElements, mappedShoppingListStrings } from "./data";

function App() {
  return (
    <div>
      <h1>My shopping list</h1>
      <p>I am going to buy the following:</p>
      <h2>Using strings</h2>
      <p>{mappedShoppingListStrings.join(", ")}</p>
      <h2>Using elements</h2>
      <ol>{mappedShoppingListElements}</ol>
    </div>
  );
}

export default App;
