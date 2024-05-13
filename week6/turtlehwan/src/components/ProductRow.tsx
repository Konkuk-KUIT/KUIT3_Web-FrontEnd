import React from "react";
import { Products } from "../App";

interface Props {
  product: Products;
  deleteProduct: (product: Products) => void;
}

const ProductRow: React.FC<Props> = ({ product, deleteProduct }) => {
  const handleClickDelBtn = (product: Products) => deleteProduct(product);

  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>
        {product.price}$
        <button onClick={() => handleClickDelBtn(product)}>삭제</button>
      </td>
      {/* <td>
        <button onClick={() => handleClickDelBtn(product)}>삭제</button>
      </td> */}
    </tr>
  );
};

export default ProductRow;
