import React from "react";
import { Product } from "../App";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

interface Props {
    products: Product[];
}

const FilterableProductTable: React.FC<Props> = ({ products }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
};

export default FilterableProductTable;