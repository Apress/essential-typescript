<template>
    <div>
        <button v-for="c in categories" 
            v-bind:key="c"
            v-bind:class="getButtonClasses(c)"
            @click="selectCategory(c)">
                {{ c }}
        </button>
    </div>     
    
</template>

<script lang="ts">

import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class CategoryList extends Vue {

    @Prop() 
    private categories!: string[];
    
    @Prop() 
    private selected: string = this.categories[0];

    selectCategory(category: string) {
        this.$emit("selectCategory", category);
    }

    getButtonClasses(category: string) : string {
        let btnClass = this.selected === category 
            ? "btn-primary": "btn-secondary";        
        return `btn btn-block ${btnClass}`;
    }
 }

</script>
