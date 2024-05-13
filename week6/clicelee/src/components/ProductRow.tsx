import { useState } from "react";

interface Products {
  id: number;
  name: string;
}

interface Props {
  product: Products;
  onDelete: (productId: number) => void;
}

const ProductRow: React.FC<Props> = ({ product, onDelete }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDelete = () => {
    if (isConfirming) {
      onDelete(product.id);
    } else {
      setIsConfirming(true);
    }
  };

  return (
    <div>
      {isConfirming ? (
        <div>
          Are you sure you want to delete "{product.name}"?
          <button onClick={handleDelete}>Confirm</button>
          <button onClick={() => setIsConfirming(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default ProductRow;
