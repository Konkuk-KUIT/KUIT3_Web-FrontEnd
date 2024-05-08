import React, { useState } from "react";
import { Products } from "../App";
import InputBar from "./InputBar";

interface Props {
  product: Products;
  addProduct: (product: Products) => void;
  editProduct: (removeProduct: Products, newProduct: Products) => void;
  deleteProduct: (product: Products) => void;
}

const ProductRow: React.FC<Props> = ({
  product,
  addProduct,
  editProduct,
  deleteProduct,
}) => {
  const [isEditBtnClicked, setIsEditBtnClicked] = useState<boolean>(false);

  const handleClickDeleteBtn = () => {
    deleteProduct(product);
  };

  const handleClickEditBtn = () => {
    setIsEditBtnClicked(true);
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
        <InputBar
          product={product}
          addProduct={addProduct}
          setIsEditBtnClicked={setIsEditBtnClicked}
          editProduct={editProduct}
        />
      )}
    </>
  );
};

export default ProductRow;
