import React from "react";
import {useState} from "react"

function Item({ name, category }) {
  const [addToCart, setCart] = useState("");

  function addToItem(){

    setCart((addToCart) => addToCart = !addToCart)
  }




  return (
    <li className={addToCart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addToCart? "add":"remove"} onClick={addToItem}>{addToCart? "Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}
	
export default Item;