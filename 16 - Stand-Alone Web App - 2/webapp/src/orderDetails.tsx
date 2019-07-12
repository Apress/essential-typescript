import { createElement } from "./tools/jsxFactory";
import { Product, Order } from "./data/entities";

export class OrderDetails {

    props: {
        order: Order
        cancelCallback: () => void,
        submitCallback: () => void
    }

    getContent(): HTMLElement {
        return <div>
            <h3 className="text-center bg-primary text-white p-2">
                Order Summary
            </h3>
            <div className="p-3">
                <table className="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th>Quantity</th><th>Product</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.order.orderLines.map(line =>
                            <tr>
                                <td>{ line.quantity }</td>
                                <td>{ line.product.name }</td>
                                <td className="text-right">
                                    ${ line.product.price.toFixed(2) }
                                </td>
                                <td className="text-right">
                                    ${ line.total.toFixed(2) }
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="text-right" colSpan="3">Total:</th>
                            <th className="text-right">
                                ${ this.props.order.total.toFixed(2) }
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="text-center">
                <button className="btn btn-secondary m-1" 
                        onclick={ this.props.cancelCallback }>
                    Back
                </button>
                <button className="btn btn-primary m-1" 
                        onclick={ this.props.submitCallback }>
                    Submit Order
                </button>                
            </div>
        </div>       
    }
}
