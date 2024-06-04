import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={`/store`}>GO TO STORE</Link>
    </>
  );
};

export default Home;
