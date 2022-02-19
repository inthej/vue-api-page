<template>
  <user-list v-bind:items="list"></user-list>
</template>

<script>
import UserService from '../../common/service/UserService'
import LogUtils from '../../common/utils/LogUtils'
import UserList from './components/UserList.vue'
export default {
  components: {
    UserList
  },
  data: function () {
    return {
      list: [],
      userService: new UserService()
    }
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await this.userService.detail(1)
        console.log(response)
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