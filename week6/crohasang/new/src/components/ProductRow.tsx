import React from "react";
import { Product } from "../App";

interface Props {
  product: Product;
}

const ProductRow: React.FC<Props> = ({ product }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}$</td>
    </tr>
  );
};

export default ProductRow;
