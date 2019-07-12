import React, { FunctionComponent, useState } from "react";
import { Product } from "./data/entities";

interface Props {
    product: Product,
    callback: (product: Product, quantity: number) => void    
}

// interface State {
//     quantity: number
// }

export const ProductItem: FunctionComponent<Props> = (props) => {

    const [quantity, setQuantity] = useState<number>(1);
    
    return <div className="card m-1 p-1 bg-light">
        <h4>
            { props.product.name }
            <span className="badge badge-pill badge-primary float-right">
                ${ props.product.price.toFixed(2) }
            </span>
        </h4>
        <div className="card-text bg-white p-1">
            { props.product.description }
            <button className="btn btn-success btn-sm float-right"
                    onClick={ () => props.callback(props.product, quantity) }>
                Add To Cart
            </button>                                
            <select className="form-control-inline float-right m-1" 
                    onChange={ (ev) => setQuantity(Number(ev.target.value)) }>
                <option>1</option>
                <option>2</option>
                <option>3</option>                
            </select>
        </div>
    </div>
}
