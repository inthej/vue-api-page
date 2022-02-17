<template>
  <ul
    v-for="user in users"
    v-bind:key="user.userId"
  >
    <photo-list-item
      v-for="album in user.albums"
      v-bind:key="album.id"
      v-bind="album">
    </photo-list-item>
  </ul>
</template>

<script>
import PhotoListItem from './PhotoListItem.vue'
export default {
  components: {
    PhotoListItem
  },
  props: {
    users: Array
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin: 50;
}
</style>