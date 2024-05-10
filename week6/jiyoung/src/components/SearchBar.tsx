import React from "react";

const SearchBar = () => {
    return (
        <form>
            {/*placeholder => 초기에 보이는 hint 텍스트 값*/}
            <input
                type="text"
                placeholder='Search...' />
            <label>
                <input
                    type="checkbox"
                    checked={false}
                />
                Only show products in stock
            </label>
        </form>
    );
};

export default SearchBar;