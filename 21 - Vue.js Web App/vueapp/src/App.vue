<template>
    <ProductList />
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import ProductList from "./views/ProductList.vue";
import { HttpHandler } from "./data/httpHandler";
import { action } from './data/storeDecorators';
import { Product } from './data/entities';

@Component({
    components: {
        ProductList
    }
})
export default class App extends Vue {
    private handler = new HttpHandler();

    constructor() {
        super();
        this.loadProducts(this.handler.loadProducts);
    }

    @action()
    loadProducts(task: () => Promise<Product[]>) {}
}

</script>
