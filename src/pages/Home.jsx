import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Home Page</h1>
      <Link to="/products">Products</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
    </div>
  );
};

export default Home;
