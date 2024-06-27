import ProductCard from "../components/ProductCard";
import axiosInstance from "../axios/axios.jsx";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axiosInstance.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts = products.map((product) => {
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
      <h1>Products</h1>
      <div className="grid">{renderProducts}</div>
    </>
  );
}
