import { useState } from "react";

export default function ProductCard({
  title,
  category,
  description,
  price,
  rating,
  image,
}) {
  const [quantity, setQuantity] = useState(0);

  const handleClick = () => {
    const newQ = quantity + 1;
    setQuantity(newQ);
  };

  return (
    <>
      <div>
        <h1>Title: {title}</h1>
        <img src={image} width="50px" height="50px" />
        <h2>Description: {description}</h2>
        <h2>Category: {category}</h2>
        <h2>Price: {price}</h2>
        <h2>Rating: {rating}</h2>
        <h2>Quantity: {quantity}</h2>
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}
