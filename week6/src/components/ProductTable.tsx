import React, { Fragment } from "react";
import { Products } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface GroupedProducts {
  category: string;
  products: Products[];
}

interface Props {
  products: Products[];
  filterText: string;
  inStockOnly: boolean;
  deleteProduct: (productId: string) =>void;
}

const ProductTable: React.FC<Props> = ({
  products,
  filterText,
  inStockOnly,
  deleteProduct
}) => {
  const filteredProducts = products.filter(
    (product) =>
      (!inStockOnly || product.stocked) &&
      product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const groupedProductsByCategory = Object.values(
    filteredProducts.reduce((acc, product) => {
      const { category } = product;
      acc[category] = acc[category] || { category, products: [] };
      acc[category].products.push(product);
      return acc;
    }, {} as { [category: string]: GroupedProducts })
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {groupedProductsByCategory.map((productCategory) => {
          return (
            <Fragment key={productCategory.category}>
              <ProductCategoryRow category={productCategory.category} />
              {productCategory.products.map((product) => (
                <ProductRow key={product.id} product={product} deleteProduct={deleteProduct}/>
              ))}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
