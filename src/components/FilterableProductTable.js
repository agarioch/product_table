import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'

export default class FilterableProductTable extends Component {
    render() {
        const { products } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <SearchBar />
                <ProductTable products={products} />
            </React.Fragment>
        )
    }
}
