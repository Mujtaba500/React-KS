import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <>
      <Link to={`/products/${category}`}>{category}</Link>
      <br />
    </>
  );
};
export default CategoryCard;
