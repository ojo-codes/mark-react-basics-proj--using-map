import { mappedShoppingListElements } from "../../react/data";

function stringifyBooleans(bools: (boolean | string)[]): string[] {
  return bools.map(stringifyBoolean);
};

function stringifyBoolean(bool: boolean | string): string {
  if (typeof bool === "boolean") {
    let newbool = bool.toString();
    return (newbool[0]).toUpperCase();
  } ;
  return bool;
};


export { stringifyBooleans, stringifyBoolean };
