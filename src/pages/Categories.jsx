import { useState, useEffect } from "react";
import axiosInstance from "../axios/axios.jsx";
import CategoryCard from "../components/CategoryCard.jsx";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await axiosInstance.get("/products/categories");
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderCategories = categories.map((category, index) => {
    return <CategoryCard category={category} key={index} />;
  });

  return <div className="categories">{renderCategories}</div>;
};

export default Categories;
