interface ShoppingListItem {
  ingredient: string;
  quantity: string;
}

const shoppingList: ShoppingListItem[] = [
  { ingredient: "eggs", quantity: "2" },
  { ingredient: "flour", quantity: "400g" },
  { ingredient: "avocados", quantity: "excessively many" },
];

const shoppingListItemToString = (item: ShoppingListItem) =>
  `${item.quantity} ${item.ingredient}`;

export const mappedShoppingListStrings = shoppingList.map(
  shoppingListItemToString
);

// Read: https://reactjs.org/docs/lists-and-keys.html
// (using index as key for simplicity for now)
export const mappedShoppingListElements = shoppingList.map((item, idx) => (
  <li key={idx}>{shoppingListItemToString(item)}</li>
));
