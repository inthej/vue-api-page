<template>
  <user-list v-bind:items="list"></user-list>
</template>

<script>
import ApiService from '../../service/ApiService'
import UserList from './components/UserList.vue'
export default {
  components: {
    UserList
  },
  data: function () {
    return {
      list: []
    }
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await ApiService.users()
        this.list = response
      } catch (err) {
        console.error(err)
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style>

</style>