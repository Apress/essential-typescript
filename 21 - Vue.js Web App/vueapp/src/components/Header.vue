<template>
            
    <div class="p-1 bg-secondary text-white text-right">
        {{ displayText }} 
        <button class="btn btn-sm btn-primary m-1">
            Submit Order
        </button>
    </div>

</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { Order } from "../data/entities";
import { state } from "../data/storeDecorators";

@Component
export default class Header extends Vue {

    @state("order")
    order!: Order

    get displayText() : string {
        let count = this.order.productCount;
        return count === 0 ? "(No Selection)" 
            : `${ count } product(s), $${ this.order.total.toFixed(2)}`
    }
}

</script>
