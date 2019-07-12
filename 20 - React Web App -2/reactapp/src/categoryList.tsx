import React, { Component } from "react";

interface Props {
    selected: string,
    categories: string[],
    selectCategory: (category: string) => void;
}

export class CategoryList extends Component<Props> {

    render() {
        return <div>
            { ["All", ...this.props.categories].map(c => {
                let btnClass = this.props.selected === c 
                    ? "btn-primary": "btn-secondary";
                return <button key={ c }
                        className={ `btn btn-block ${btnClass}` } 
                        onClick={ () => this.props.selectCategory(c) }>
                    { c }
                </button>            
            }) }
        </div>     
    }
}
