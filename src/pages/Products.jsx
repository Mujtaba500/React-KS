import ProductCard from "../components/ProductCard";
import axiosInstance from "../axios/axios.jsx";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getProducts = async () => {
    const response = await axiosInstance.get("/products");
    setProducts(response.data);
    setSearchedProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // apply filteration

    const searchResults = products.filter((product) => {
      if (product.title.toLowerCase().includes(searchString.toLowerCase()))
        return true;
      else return false;
    });

    setSearchedProducts(searchResults);
  }, [searchString]);

  const renderProducts = searchedProducts.map((product) => {
    return (
      <ProductCard
        title={product.title}
        image={product.image}
        category={product.category}
        description={product.description}
        price={product.price}
        rating={product.rating.rate}
        key={product.id}
      />
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />
      <div className="grid w-full grid-cols-3 gap-3">{renderProducts}</div>
    </>
  );
}
