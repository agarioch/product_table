import React from 'react'

export default function SearchBar() {
    return (
        <form className="form-group">
            <div>
                <input type="text" name="search" className="form-control" placeholder="Search" />
            </div>
            <div className="form-check mt-3">
                <input type="checkbox" name="inStock" className="form-check-input mr-3" />
                <label className="form-check-label" for="inStock">Only show products in stock</label>
            </div>
        </form>
    )
}
