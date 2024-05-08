import React, { ChangeEvent, useState } from "react";
import { Products } from "../App";
import uuid from "react-uuid";

interface Props {
  product: Products;
  addProduct: (product: Products) => void;
  setIsEditBtnClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  editProduct?: (removeProduct: Products, newProduct: Products) => void;
}

const InputBar: React.FC<Props> = ({
  product,
  addProduct,
  setIsEditBtnClicked,
  editProduct,
}) => {
  const [newProduct, setNewProduct] = useState<Products>({
    ...product,
    id: uuid(),
  });

  const handleChange = (value: string | boolean, label: keyof Products) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleClickProductBtn = () => {
    editProduct !== undefined
      ? product.id !== newProduct.id &&
        editProduct(product, { ...newProduct, id: uuid() })
      : addProduct({ ...newProduct, id: uuid() });

    setNewProduct({
      category: "",
      price: 0,
      stocked: true,
      name: "",
      id: uuid(),
    });
    setIsEditBtnClicked !== undefined && setIsEditBtnClicked(false);
  };

  return (
    <>
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
    </>
  );
};

export default InputBar;
