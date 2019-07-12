<template>
    <div class="card m-1 p-1 bg-light">
        <h4>
            {{ product.name }}
            <span class="badge badge-pill badge-primary float-right">
                ${{ product.price.toFixed(2) }}
            </span>
        </h4>
        <div class="card-text bg-white p-1">
            {{ product.description }}
            <button class="btn btn-success btn-sm float-right"
                    @click="handleAddToCart">
                Add To Cart
            </button>                                
            <select class="form-control-inline float-right m-1" 
                    v-model.number="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>                
            </select>
        </div>
    </div>
</template>

<script lang="ts">

import { Product } from "../data/entities";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductItem extends Vue {
    @Prop() private product!: Product;

     quantity: number = 1;    

     handleAddToCart() {
         this.$emit("addToCart", { product: this.product, quantity: this.quantity });
     }
 }

</script>
