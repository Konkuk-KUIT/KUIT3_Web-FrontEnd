import React, { ReactElement } from "react";
import { Product } from "../App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Props {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
}

const ProductTable: React.FC<Props> = ({ products, filterText, inStockOnly }) => {
    const rows: ReactElement[] = [];
    let lastCategory: string | null = null;

    // 배열 복사
    const productsCopy = [...products];

    // 배열 정렬(오름차순) & 필터링()
    const filteredProducts = productsCopy
        .sort((a, b) => (a.category > b.category ? 1 : -1))
        .filter((product) => {
            const filterTextMatch = product.name
                .toLowerCase()
                .includes(filterText.toLowerCase())

            const inStockCheck = !inStockOnly || product.stocked;

            return filterTextMatch && inStockCheck;
        })

    filteredProducts.map((product, index) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category + index} />
            );
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;