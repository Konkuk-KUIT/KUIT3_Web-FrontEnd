import React from "react";
import { Products } from "../App";
import ProductTable from "./ProductTable";

interface Props {
  product: Products;
  deleteProduct: (productId: string) => void;
}

const ProductRow: React.FC<Props> = ({ product, deleteProduct }) => {

  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}$</td>
      <button onClick={() => {
          deleteProduct(product.id);
        }}
        aria-label="삭제">🗑️</button>
    </tr>
  );
};

export default ProductRow;
