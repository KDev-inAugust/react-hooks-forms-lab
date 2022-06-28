import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onNameInput, onCatergoryChange, onClickProp}) {
  return (
    <form className="NewItem" onChange={onNameInput}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={onCatergoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={onClickProp}>Add to List</button>
    </form>
  );
}

export default ItemForm;
