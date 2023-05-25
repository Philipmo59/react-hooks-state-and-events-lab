import React,{useState} from "react";

function Item({ name, category }) {
  const [isNotAdded, setIsAdded] = useState(true)
  // const status = isNotAdded? "":"in-cart"
  // const text = isNotAdded? "Add to Cart":"Remove"
  // const color = isNotAdded? "add":"remove"
  const [status,text,color] = isNotAdded?["","Add to Cart","add"]:["in-cart","Remove","remove"]
  function changeStatus(){
    setIsAdded((currentIsAdded) => currentIsAdded? false:true)
  }
  return (
    <li className= {status}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={color} onClick={changeStatus}>{text}</button>
    </li>
  );
}

export default Item;
