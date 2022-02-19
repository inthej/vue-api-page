<template>
  <div>
    <!-- <photo-list v-bind:items="list"></photo-list> -->
  </div>
</template>

<script>
import AlbumService from '../../common/service/AlbumService'

export default {
  components: {
    // PhotoList
  },
  data: function () {
    return {
      list: [],
      albumService: new AlbumService()
    }
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await this.albumService.detail(1)
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    },
    fetchDataList: async function () {
      try {
        const response = await this.albumService.detailList()
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    },
    confirm: function () {
      
    }
  },
  created() {
    this.fetchData()
    this.fetchDataList()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>