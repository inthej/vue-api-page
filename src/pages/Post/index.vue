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
        console.log(err)
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