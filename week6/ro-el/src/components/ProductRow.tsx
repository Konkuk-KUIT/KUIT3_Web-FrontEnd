import React from "react";
import { Products } from "../App";

interface Props {
  product: Products;
  deleteProduct: (product: Products) => void;
}

const ProductRow: React.FC<Props> = ({ product, deleteProduct }) => {
  const handleClickDeleteBtn = () => {
    deleteProduct(product);
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "color" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <button onClick={handleClickDeleteBtn}>delete</button>
    </tr>
  );
};

export default ProductRow;

/*TODO
(필수) 상품 삭제 버튼 추가하기; deleteProduct
(선택) 상품 정보 수정 버튼 추가하기; editProduct
*/
