import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[selectedCategory, setSelectedCategory] = useState("All")
  let grocery = items
  if (selectedCategory !== 'All'){
    grocery  = items.filter(item => item.category === selectedCategory)
  }
  function filterGrocery(event){
    console.log(event)
    console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterGrocery}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {grocery.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
