import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { DataModelModule } from "./data/data.module";
import { ProductItem } from './productItem.component';
import { CategegoryList } from "./categoryList.component";
import { Header } from "./header.component";
import { ProductList } from "./productList.component";
import { RouterModule } from "@angular/router"
import { OrderDetails } from "./orderDetails.component";
import { Summary } from "./summary.component";

const routes = RouterModule.forRoot([
    { path: "products", component: ProductList },
    { path: "order", component: OrderDetails}, 
    { path: "summary/:id", component: Summary},
    { path: "", redirectTo: "/products", pathMatch: "full"}
]);

@NgModule({
    declarations: [AppComponent,  ProductItem, CategegoryList, Header, ProductList, 
                   OrderDetails, Summary],
    imports: [BrowserModule, AppRoutingModule, FormsModule, DataModelModule, routes],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
