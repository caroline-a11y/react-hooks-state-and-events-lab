import React, {useState} from "react";
import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const cartClass = inCart ? "in-cart" : ""

  function handleClick(){
    setInCart(!cart)
  }

  return (
    <li className={inCart ? "in-cart": ""}>
      <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}className="add">{inCart ? "Remove From" : "Add to"} Cart</button>
      <button className="add">Add to Cart</button>
    </li>
    </li>
  );
}

export default Item;
