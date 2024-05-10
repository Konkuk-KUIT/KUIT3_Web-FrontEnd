import React, { ChangeEvent } from "react";

interface Props {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
    onInStockOnlyChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<Props> = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    // 문자열 상태 변경
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterTextChange(e.target.value);
    };

    // 체크박스 상태 변경
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        onInStockOnlyChange(e.target.checked);
    };

    return (
        <form>
            {/*placeholder => 초기에 보이는 hint 텍스트 값*/}
            <input
                type="text"
                value={filterText}
                placeholder='Search...'
                onChange={handleTextChange}
            />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleCheckboxChange}
                />
                Only show products in stock
            </label>
        </form>
    );
};

export default SearchBar;