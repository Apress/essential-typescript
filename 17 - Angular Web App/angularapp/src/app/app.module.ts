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

@NgModule({
    declarations: [AppComponent, ProductItem, CategegoryList, Header, ProductList],
    imports: [BrowserModule, AppRoutingModule, FormsModule, DataModelModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
