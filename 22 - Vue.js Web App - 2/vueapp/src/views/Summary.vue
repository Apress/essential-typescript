<template>
            
<div class="m-2 text-center">
            <h2>Thanks!</h2>
            <p>Thanks for placing your order.</p>
            <p>Your order is #{{ id }}</p>
            <p>We'll ship your goods as soon as possible.</p>
            <router-link to="/products" class="btn btn-primary">OK</router-link>
        </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import { state } from "../data/storeDecorators";

@Component
export default class Summary extends Vue {

    @state("storedId")
    id!: number
}

</script>
