<template>
    <div>
        <h3 class="text-center bg-primary text-white p-2">Order Summary</h3>
        <div class="p-3">
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th><th>Product</th>
                        <th class="text-right">Price</th>
                        <th class="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="line in order.lines" v-bind:key="line.product.id">                            
                        <td>{{ line.quantity }}</td>
                        <td>{{ line.product.name }}</td>
                        <td class="text-right">
                            ${{ line.product.price.toFixed(2) }}
                        </td>
                        <td class="text-right">
                            ${{ line.total.toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th class="text-right" colSpan="3">Total:</th>
                        <th class="text-right">
                            ${{ order.total.toFixed(2) }}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="text-center">
            <router-link to="/products" class="btn btn-secondary m-1">
                Back
            </router-link>
            <button class="btn btn-primary m-1" @click="submit">
                Submit Order
            </button>                
        </div>
    </div>          
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { Order } from "../data/entities";
import { state, action } from "../data/storeDecorators";
import { HttpHandler } from '../data/httpHandler';
import router from "../router";

@Component({
    router
})
export default class OrderDetails extends Vue {
    private httpHandler = new HttpHandler();

    @state("order")
    order!: Order

    @action()
    storeOrder(task: (order: Order) => Promise<number>) {}

    submit() {
        this.storeOrder((order: Order) => {
            return this.httpHandler.storeOrder(order).then(id => {
                this.$router.push("/summary");
                return id;
            });
        });        
    }
}

</script>
