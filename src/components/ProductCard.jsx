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
        {/* <button onClick={handleClick}>Add</button> */}
        <button
          type="button"
          onClick={handleClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </div>
    </>
  );
}
