<template>
  <div>
    <ul class="list-group">
      <li v-for="item of fruits" :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{item.name}}
        <span class="badge badge-primary badge-pill">{{item.amount}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'List',
    computed: {
        ...mapState(['fruits'])
    }
}
</script>