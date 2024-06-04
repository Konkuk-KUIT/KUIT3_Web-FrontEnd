import React, { useState } from "react";
import { Products } from '../data-access';

interface Props {
  product : Products;
  onClose : () => void;
  onUpdate : (updatedProduct : Products) => void;
}

const EditModal : React.FC <Props> = ({product, onClose, onUpdate}) => {
  const [editedProduct, setEditedProduct] = useState<Products>({...product});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value, 
    }));
  }

  const handleSubmit = ( e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(editedProduct);
  }

  return (
    <div>
      <div>
        <span onClick={onClose}>editProduct</span>
        <h2>edit product</h2>
        <form onSubmit={handleSubmit}>
        <label>
            name:
            <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
          </label>
          <label>
            cateogry:
            <input type="text" name="category" value={editedProduct.category} onChange={handleInputChange} />
          </label>
          <label>
            price:
            <input type="text" name="price" value={editedProduct.price} onChange={handleInputChange} />
          </label>
          <label>
            is Stocked:
            <input type="checkbox" name="stocked" checked={editedProduct.stocked} onChange={handleInputChange} />
          </label>
          <button type="submit">edit</button>
        </form>
      </div>
    </div>
  )
}

export default EditModal;