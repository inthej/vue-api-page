<template>
  <user-list v-bind:items="list"></user-list>
</template>

<script>
import ApiService from '../../common/service/ApiService'
import LogUtils from '../../common/utils/LogUtils'
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
        this.list = await ApiService.users()
        LogUtils.debug(this.list)
      } catch (err) {
        LogUtils.error(err)
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