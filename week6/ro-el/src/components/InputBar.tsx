import React, { ChangeEvent, useState } from "react";
import { Products } from "../App";
import uuid from "react-uuid";

interface Props {
  product: Products;
  addProduct: (product: Products) => void;
}

const InputBar: React.FC<Props> = ({ product, addProduct }) => {
  const [newProduct, setNewProduct] = useState<Products>({
    ...product,
    id: uuid(),
  });

  const handleChange = (value: string | boolean, label: keyof Products) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleClickProductBtn = () => {
    addProduct({ ...newProduct });
    setNewProduct({
      category: "",
      price: "",
      stocked: true,
      name: "",
      id: uuid(),
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
          handleChange(e.target.value, "price");
        }}
        placeholder="price..."
      />
      <label>Is Stocked</label>
      <input
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
