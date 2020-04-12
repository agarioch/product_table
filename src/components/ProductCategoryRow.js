import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {
    render() {
        const category = this.props.category;
        return (
            <tr className="h6">
                <td colSpan="2">
                    {category}
                </td>
            </tr>
        )
    }
}
