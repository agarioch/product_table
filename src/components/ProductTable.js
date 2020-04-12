import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable({ products }) {
    const rows = [];
    let currCategory;

    products.forEach((product) => {
        if (product.category !== currCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
            currCategory = product.category;
        };
        rows.push(<ProductRow product={product} key={product.name} />)
    });

    return (
        <table className="table table-responsive-sm mt-3">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>In Stock</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}
