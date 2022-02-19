<template>
  <div>Post</div>
</template>

<script>
import PostService from '../../common/service/PostService'
export default {
  data: function () {
    return {
      postService: new PostService()
    }
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await this.postService.detail(1)
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    },
    fetchDataList: async function () {
      try {
        const response = await this.postService.detailList()
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    }
  },
  created() {
    this.fetchData()
    this.fetchDataList()
  }
}
</script>

<style>

</style>