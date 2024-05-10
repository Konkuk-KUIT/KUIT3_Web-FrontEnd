import React from "react";
import { Products } from '../data-access';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  product : Products;
  onDelete : (product : Products) => void;
  onEdit : (product : Products) => void;
}

const ProductRow : React.FC<Props> = ( {product, onDelete, onEdit} ) => {
  return (
    <tr>
      <td style={{color: product.stocked ? 'color' : 'red'}}>{product.name}</td>
      <td>{product.price}$</td>
      <td>
        <button onClick = {() => onEdit(product)}>
        <FontAwesomeIcon icon={faEdit} />
        편집
        </button>
        
        <button onClick = {() => onDelete(product)}>
        <FontAwesomeIcon icon={faTrash} />
        삭제
        </button>
      </td>
    </tr>
  )
}

export default ProductRow;