import React from "react";
const products = [
    { title: "Chowmein", price: 100 },
    { title: "Burger", price: 200 },
    { title: "Pizza", price: 300 },
];

function ListRendering() {
  const listItem = products.map((product) => {
    <li key={product.price}>
      {product.title}
    </li>;
  });

  return(
    <div>
        <ul>{listItem}</ul>
    </div>
  )
}

export default ListRendering;
