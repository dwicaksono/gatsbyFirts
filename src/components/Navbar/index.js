import React from 'react'
import {Link} from 'gatsby'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Hot New</Link>
                </li>
                <li>
                    <Link to="/pizzas/">Pizzas</Link>
                </li>
                <li>
                    <Link to="/">Logo</Link>
                </li>
                <li>
                    <Link to="/slicemasters">SliceMasters</Link>
                </li>
                <li>
                    <Link to="/orders">Order</Link>
                </li>
            </ul>
        </div>
    )
}
