import React, { Component } from 'react'
import classname from 'classname';

export default class ProductRow extends Component {
    render() {
        const { name, price, stocked } = this.props.product;
        var rowColor = classname({
            'alert-warning': !stocked
        })
        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {price}
                </td>
                <td className={rowColor}>
                    {stocked ? "Yes" : "No"}
                </td>
            </tr>
        )
    }
}
