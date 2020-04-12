import React from 'react'

export default function SearchBar({ filterText, inStockOnly, onCheck, onInput }) {

    function handleInput(e) {
        onInput(e.target.value);
    };
    function handleCheck() {
        onCheck();
    };

    return (
        <form className="form-group">
            <div>
                <input type="text" name="search" className="form-control" placeholder="Search" value={filterText} onChange={handleInput} />
            </div>
            <div className="form-check mt-3">
                <input type="checkbox" name="inStock" className="form-check-input mr-3" value={inStockOnly} onChange={handleCheck} />
                <label className="form-check-label" for="inStock">Only show products in stock</label>
            </div>
        </form>
    )
}
