import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "category-list",
    templateUrl: "./categoryList.component.html"
})
export class CategegoryList {
    
    @Input()
    selected: string

    @Input()
    categories: string[];

    @Output()
    selectCategory = new EventEmitter<string>();

    getBtnClass(category: string): string {
        return  "btn btn-block " + 
            (category === this.selected ? "btn-primary" : "btn-secondary");
    }
}
