import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }]
        };
    }
    render() {
        console.log(this.state.products)
        return (
            <div className="container-lg">
                <h1 className="display-4">Product Table</h1>
                <FilterableProductTable products={this.state.products} />
            </div>
        )
    }
}
export default App;