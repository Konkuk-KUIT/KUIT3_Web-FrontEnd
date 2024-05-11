import React, { ChangeEvent, useState } from "react";
import { Products } from "../App";
import uuid from "react-uuid";

interface Props {
  addProduct: (product: Products) => void;
}

const InputBar: React.FC<Props> = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState<Omit<Products, "id">>({
    category: "",
    price: 0,
    stocked: true,
    name: "",
  });

  const handleChange = (
    value: (typeof newProduct)[keyof Omit<Products, "id">],
    label: keyof Omit<Products, "id">
  ) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleClickProductBtn = () => {
    addProduct({ ...newProduct, id: uuid() });
    setNewProduct({
      category: "",
      price: 0,
      stocked: true,
      name: "",
    });
  };

  return (
    <form>
      <input
        type="text"
        value={newProduct.category}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value, "category");
        }}
        placeholder="category..."
      />
      <input
        type="text"
        value={newProduct.price}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(Number(e.target.value), "price");
        }}
        placeholder="price..."
      />
      <label htmlFor="stocked">Is Stocked</label>
      <input
        id="stocked"
        type="checkbox"
        checked={newProduct.stocked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.checked, "stocked");
        }}
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value, "name");
        }}
        placeholder="name..."
      />
      <button onClick={handleClickProductBtn} type="button">
        Add new product
      </button>
    </form>
  );
};

export default InputBar;