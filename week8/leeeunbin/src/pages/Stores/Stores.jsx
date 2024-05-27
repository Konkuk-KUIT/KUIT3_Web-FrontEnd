import React from "react";
import Header from "../../components/header/Header"
import { useParams } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import './Stores.scss';

const Stores = () => {
  const { categoryId } = useParams();
  return (
    <>
      <Header />
      <div className="Title">{categoryId}</div>
      <StoreItem categoryId={categoryId}/>
      <OrderBar />
    </>
  );
};

export default Stores;
