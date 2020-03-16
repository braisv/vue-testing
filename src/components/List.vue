/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of fruitSorted" :key="item.id" @click="addOne(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{item.name}}
        <span class="badge badge-primary badge-pill">{{item.amount}}</span>
      </li>
    </ul>
    <button class="btn btn-warning text-white btn-block p-3 mt-3" @click="reset">Reset</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'List',
    computed: {
        ...mapState(['fruits']),
        fruitSorted() {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return this.fruits.sort( (a,b) => b.amount - a.amount )
        }
    },
    methods: {
        ...mapMutations(['addOne', 'reset'])
    }
}
</script>