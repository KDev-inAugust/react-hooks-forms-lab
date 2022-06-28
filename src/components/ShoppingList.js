import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Produce");
  const [stateList, setStateList] = useState([]);
  
 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    
  }

  function onSearchChange(event){
    setSearchValue(event.target.value);
    console.log("search: " + searchValue);
  }

      //-----this is for the form input

  function handleFormInput(event){
    setNameValue(event.target.value);
    console.log(nameValue);
  }

  function handleAddItemCategory (event){
    setCategoryValue(event.target.value);
    console.log(categoryValue);
  }

  function handleListClick (event) {
      event.preventDefault();
      const addOnItem = {name:nameValue, category:categoryValue}
      
      itemsToDisplay = [...itemsToDisplay, addOnItem];
      setStateList(itemsToDisplay)
  }

  
  //------this is for the list that is displayed


  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => {
    if (searchValue !== ""){
      return item.name === searchValue
    }
    else return item.name === item.name;
  });

const searchedItems = items.filter(item => {
    if (searchValue !== ""){
      return item.name === searchValue
    }
  })
  


  return (
    <div className="ShoppingList">
      <ItemForm onNameInput={handleFormInput} onCatergoryChange={handleAddItemCategory} onClickProp={handleListClick}/>
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} 
      </ul>
      <ul className="Items">
         {stateList.map((item) => (
          <Item key={item.name} name={item.name} category={item.category} />
         ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
