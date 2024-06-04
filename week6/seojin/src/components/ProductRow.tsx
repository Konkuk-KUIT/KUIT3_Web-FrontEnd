import React, { useState } from "react";
import { Products } from "../App";
import InputBar from "./InputBar";

interface Props {
  product: Products;
  addProduct: (product: Products) => void;
  deleteProduct: (product: Products) => void;
}

const ProductRow: React.FC<Props> = ({
  product,
  addProduct,
  deleteProduct,
}) => {
  const [isEditBtnClicked, setIsEditBtnClicked] = useState<boolean>(false);

  const handleClickDeleteBtn = () => {
    deleteProduct(product);
  };

  return (
    <>
      {!isEditBtnClicked ? (
        <tr>
          <td style={{ color: product.stocked ? "color" : "red" }}>
            {product.name}
          </td>
          <td>{product.price}$</td>
          <button onClick={handleClickDeleteBtn}>삭제</button>
        </tr>
      ) : (
        <InputBar
          product={product}
          addProduct={addProduct}
          setIsEditBtnClicked={setIsEditBtnClicked}
        />
      )}
    </>
  );
};

export default ProductRow;
