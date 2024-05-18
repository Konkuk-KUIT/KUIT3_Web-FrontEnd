import React from "react";
import Header from "../components/Header.jsx";
import { data } from "../db";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <>
      <Header />
      {data.map((data, index) => (
        <div key={index}>
          <Link to={`/detail/${index}`}>{data.name}</Link>
        </div>
      ))}
    </>
  );
};

export default Detail;
