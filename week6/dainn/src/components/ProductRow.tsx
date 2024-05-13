import React, { ChangeEvent, useState } from "react";
import { Products } from "../App";

interface Props {
  product: Products;
  deleteProduct: (deleteId: string) => void;
}

const ProductRow: React.FC<Props> = ({ product, deleteProduct }) => {


  const handleClickDeleteBtn = () => {
    console.log("click");
    console.log(product.id);
    deleteProduct(product.id);

  };


  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}$</td>
      <button onClick={handleClickDeleteBtn}>삭제</button>
    </tr>
  );
};

export default ProductRow;
