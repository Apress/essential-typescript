<template>
    <div>
        <Header />
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 p-2">
                    <CategoryList v-bind:categories="categories" 
                        v-bind:selected="selectedCategory"
                        @selectCategory="handleSelectCategory" />
                </div>
                <div class="col-9 p-2">
                    <ProductItem v-for="p in filteredProducts" v-bind:key="p.id"  
                        v-bind:product="p" @addToCart="handleAddToCart" />
                </div>                            
            </div>        
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { Product, Order } from "../data/entities";
import ProductItem from "../components/ProductItem.vue";
import CategoryList from "../components/CategoryList.vue";
import Header from "../components/Header.vue";
import { state, getter, mutation } from "../data/storeDecorators";

@Component({
    components: {
        ProductItem, CategoryList, Header
    }
})
export default class ProductList extends Vue {
    
    @state("selectedCategory")
    selectedCategory!: string;

    @getter()
    filteredProducts!: Product[];

    @getter()
    categories!: string[]

    @mutation("selectCategory")
    handleSelectCategory(category: string) {}

    @mutation("addToOrder")
    handleAddToCart(selection: { product: Product, quantity: number}) {}
}

</script>
