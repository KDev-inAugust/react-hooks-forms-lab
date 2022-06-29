import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    
  }

  // function onSearchChange(event){
  //   setSearchValue(event.target.value);
  //   console.log("search: " + searchValue);
  // }

  
  //------this is for the list that is displayed


  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => {
    if (searchValue !== ""){
      return item.name.includes(searchValue)
    }
    else return item.name === item.name;
  });


  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={searchValue} onSearchChange={setSearchValue} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} 
      </ul>
    </div>
  );
}

export default ShoppingList;
