import React from "react";
import { Products } from "../App";

interface Props {
  product: Products;
  deleteProduct: (productId: string) =>void;
}

const ProductRow: React.FC<Props> = ({ product,deleteProduct }) => {
  const handleDeleteBtn = () =>{
    deleteProduct(product.id);
  }
  
  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}$</td>
      <button onClick={handleDeleteBtn} type="button" aria-label="삭제">🗑️</button>
    </tr>
  );
};

export default ProductRow;
