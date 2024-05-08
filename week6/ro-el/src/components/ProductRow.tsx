import React, { ChangeEvent, useState } from "react";
import { Products } from "../App";
import uuid from "react-uuid";

interface Props {
  product: Products;
  editProduct: (removeProduct: Products, newProduct: Products) => void;
  deleteProduct: (product: Products) => void;
}

const ProductRow: React.FC<Props> = ({
  product,
  editProduct,
  deleteProduct,
}) => {
  const [isEditBtnClicked, setIsEditBtnClicked] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<Products>({ ...product });

  const handleClickDeleteBtn = () => {
    deleteProduct(product);
  };

  const handleClickEditBtn = () => {
    setIsEditBtnClicked(true);
  };

  const handleChange = (value: string | boolean, label: keyof Products) => {
    console.log(product.id);
    console.log(newProduct.id);
    setNewProduct({ ...newProduct, [label]: value, id:uuid() });
  };

  const handleClickProductBtn = () => {
    console.log(product.id);
    console.log(newProduct.id);
    if (product.id !== newProduct.id) {
      editProduct(product, {...newProduct, id:uuid()});
    }
    setIsEditBtnClicked(false);
  };

  return (
    <>
      {!isEditBtnClicked ? (
        <tr>
          <td style={{ color: product.stocked ? "color" : "red" }}>
            {product.name}
          </td>
          <td>{product.price}</td>
          <button onClick={handleClickEditBtn}>🖋️</button>
          <button onClick={handleClickDeleteBtn}>🗑️</button>
        </tr>
      ) : (
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
      )}
    </>
  );
};

export default ProductRow;
