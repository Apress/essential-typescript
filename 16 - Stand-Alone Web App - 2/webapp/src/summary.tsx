import { createElement } from "./tools/jsxFactory";

export class Summary {

    props: {
        orderId: number,
        callback: () => void
    }

    getContent(): HTMLElement {
        return <div className="m-2 text-center">
            <h2>Thanks!</h2>
            <p>Thanks for placing your order.</p>
            <p>Your order is #{ this.props.orderId }</p>
            <p>We'll ship your goods as soon as possible.</p>
            <button className="btn btn-primary" onclick={ this.props.callback }>
                OK
            </button>
        </div>
    }
}
