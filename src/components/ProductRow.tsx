import React from "react";
import { Products } from "../App";

interface Props {
  product: Products;
  deleteProduct: (delProduct: Products) => void;
}

const ProductRow: React.FC<Props> = ({ product, deleteProduct }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}$</td>
      <button onClick={() => deleteProduct(product)}>삭제</button>
    </tr>
  );
};

export default ProductRow;
