import React from "react";
import { Products } from "../App";


interface Props {
  product: Products;
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  deleteProduct: (productDeleted: Products) => void
}


const ProductRow: React.FC<Props> = ({ product, setProducts, deleteProduct }) => {


  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}$<button onClick = {() => deleteProduct(product)}>삭제</button></td>
    </tr>
  );
};

export default ProductRow;
