import React from "react";
import { Products } from "../App";

interface Props {
  product: Products;
  onDelete: (productId: string) => void; //
}

const ProductRow: React.FC<Props> = ({ product, onDelete }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? 'color' : 'red' }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onDelete(product.id)}>삭제</button>
      </td>
    </tr>
  );
};

export default ProductRow;