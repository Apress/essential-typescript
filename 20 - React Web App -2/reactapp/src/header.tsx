import React, { Component } from "react";
import { Order } from "./data/entities";
import { NavLink } from "react-router-dom";

interface Props {
    order: Order
}

export class Header extends Component<Props> {

    render() {
        let count = this.props.order.productCount;
        return <div className="p-1 bg-secondary text-white text-right">
            { count === 0 ? "(No Selection)" 
                : `${ count } product(s), $${ this.props.order.total.toFixed(2)}` }
            <NavLink to="/order" className="btn btn-sm btn-primary m-1">
                Submit Order
            </NavLink>
        </div>
    }
}
