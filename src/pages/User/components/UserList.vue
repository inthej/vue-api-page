<template>
  <div class="row">
    <user-list-item 
    v-for="item in items" 
    v-bind:key="item.id"
    v-bind="item">
    </user-list-item>
  </div>
</template>

<script>
import UserListItem from './UserListItem.vue'
export default {
  components: { UserListItem },
  props: {
    items: Array
  }
}
</script>

<style>

</style>