import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.onCheck = this.onCheck.bind(this);
        this.onInput = this.onInput.bind(this);
    }

    onInput(value) {
        console.log(value)
        this.setState({
            filterText: value
        })
    }

    onCheck() {
        this.setState(state => ({
            inStockOnly: !state.inStockOnly
        }))
    }

    render() {
        const { products } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onCheck={this.onCheck} onInput={this.onInput} />
                <ProductTable products={products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} SearchBar={this.state.inStockOnly} />
            </React.Fragment>
        )
    }
}
