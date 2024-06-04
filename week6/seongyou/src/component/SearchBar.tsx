import React, { ChangeEvent } from "react";

interface Props {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
    onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({
    filterText, 
    inStockOnly, 
    onFilterTextChange, 
    onInStockOnlyChange
}) => {

    const handlerTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterTextChange(e.target.value);
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        onInStockOnlyChange(e.target.checked);
    };

    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={handlerTextChange} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={handleCheckboxChange} />
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;