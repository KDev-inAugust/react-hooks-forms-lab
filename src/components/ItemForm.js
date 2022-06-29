import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Produce");

      //-----this is for the form input

      function handleFormInput(event){
        setNameValue(event.target.value);
        console.log(nameValue);
      }
    
      function handleAddItemCategory (event){
        setCategoryValue(event.target.value);
        console.log(categoryValue);
      }

      const newItem = {
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name: nameValue,
        category: categoryValue,
      };


      
      function handlesubmit(e){
        e.preventDefault();
        onItemFormSubmit(newItem)
      }
     

//-------call onCLikProp in Handle submit

  return (
    <form className="NewItem" onSubmit={handlesubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleAddItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
