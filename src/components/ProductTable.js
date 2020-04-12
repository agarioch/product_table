import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    const rows = [];
    let currCategory;

    props.products.forEach((product) => {
        if (product.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
            return;
        };
        if (inStockOnly && !product.stocked) {
            return;
        };
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
