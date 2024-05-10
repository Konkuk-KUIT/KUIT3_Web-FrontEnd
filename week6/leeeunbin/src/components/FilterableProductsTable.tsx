import React, { useState } from "react";
import { Products } from '../data-access';
import { SearchBar, ProductTable, InputBar, EditModal } from '../components';

interface Props {
  products: Products[];
  setProducts : React.Dispatch<React.SetStateAction<Products[]>>;
  onDelete: (product: Products) => void;
  onEdit: (product: Products) => void;
}

const FilterableProductsTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState <Products | null>(null);

  const emptyProduct : Products = {
    category : '',
    price: '',
    stocked : true ,
    name : '',
  }

  const addProduct = (newProduct : Products) => {
    setProducts((previousData : Products[]) => [...previousData, newProduct]);
  }

  const deleteProduct = (product : Products) => {
    const updatedProducts = products.filter(item => item !== product);

    setProducts(updatedProducts);
  }

  const editProduct = (product : Products) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }

  const updateProduct = (updatedProduct : Products) => {
    const updatedProducts = products.map ((item) => {
      if(item === selectedProduct) {
        return updatedProduct
      }

      return item;
    })
    setProducts(updatedProducts);
    closeModal();
  }

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly}
      onFilterTextChange = {setFilterText}
      onInStockOnlyChange = {setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} onDelete={deleteProduct} onEdit={editProduct}/>
      <InputBar product = {emptyProduct} addProduct = {addProduct} />
      
      {isModalOpen && selectedProduct && (
        <EditModal
          product={selectedProduct}
          onClose={closeModal}
          onUpdate={updateProduct}
        />
      )}
    </div>
  );
}

export default FilterableProductsTable;