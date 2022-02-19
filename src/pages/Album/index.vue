<template>
  <div>
    <!-- <photo-list v-bind:items="list"></photo-list> -->
    <button v-on:click="confirm">데이터가공 확인</button>
  </div>
</template>

<script>
import AlbumService from '../../common/service/AlbumService'
import ValueUtils from'../../common/utils/ValueUtils'
// import PhotoList from './components/PhotoList.vue'

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
  // computed: {
  //   users: function () {
  //     const userMap = new Map()
  //     this.list.forEach(item => {
  //       const albums = ValueUtils.nvl(userMap.get(item.userId), [])
  //       albums.push(item)
  //       userMap.set(item.userId, albums)
  //     })

  //     const users = []
  //     userMap.forEach(albums => {
  //       users.push({userId: albums[0].userId, albums: albums.map(album => ({id: album.id, title: album.title}))})
  //     })

  //     return users
  //   },
  // },
  methods: {
    fetchData: async function () {
      // try {
      //   // 1. User 데이터
      //   // {
      //   //   "id": 1,
      //   //   "name": "Leanne Graham",
      //   //   "username": "Bret",
      //   //   "email": "Sincere@april.biz",
      //   //   "address": {
      //   //     "street": "Kulas Light",
      //   //     "suite": "Apt. 556",
      //   //     "city": "Gwenborough",
      //   //     "zipcode": "92998-3874",
      //   //     "geo": {
      //   //       "lat": "-37.3159",
      //   //       "lng": "81.1496"
      //   //     }
      //   //   },
      //   //   "phone": "1-770-736-8031 x56442",
      //   //   "website": "hildegard.org",
      //   //   "company": {
      //   //     "name": "Romaguera-Crona",
      //   //     "catchPhrase": "Multi-layered client-server neural-net",
      //   //     "bs": "harness real-time e-markets"
      //   //   }
      //   // },
      //   this.userMap = new Map()
      //   this.users = await ApiService.users()
      //   this.users.forEach(user => {
      //     this.userMap.set(user.id, user)
      //   })

      //   // 2. album 데이터 가공
      //   // {"userId": 1, "id": 1, "title": "quidem molestiae enim"},
      //   this.albums = await ApiService.albums() 
      //   this.userMap.forEach(user => {
      //     const userAlbums = this.albums.filter(album => album.userId === user.id)
      //     this.userMap.set(user.id, {...user, albums: userAlbums})
      //   })

      //   // 3. photo 가공
      //   // {
      //   //  "albumId": 1, 
      //   //  "id": 1, 
      //   //  "title": "accusamus beatae ad facilis cum similique qui sunt", 
      //   //  "url": "https://via.placeholder.com/600/92c952", 
      //   //  "thumbnailUrl": "https://via.placeholder.com/150/92c952" 
      //   //  }
      //   this.photos = await ApiService.photos()
      //   this.userMap.forEach(user => user.albums.forEach(album => {
      //     const albumPhotos = this.photos.filter(photo => photo.albumId === album.id)
      //     this.userMap.set(user.id, {
      //       ...user, 
      //       albums: user.albums.map(item => ({...item, photos: albumPhotos}))
      //     })
      //   }))

      //   console.log(this.list)
      // } catch (err) {
      //   console.log(err)
      // }

      try {
        const response = await this.albumService.detail(1)
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    },
    confirm: function () {
      this.userMap.forEach(user => {
        console.log('user:', user)
      })
    },
    filterUserAlbums: function (usersAlbums) {
      const userMap = new Map()
      usersAlbums.forEach(album => {
        const albums = ValueUtils.nvl(userMap.get(album.userId), [])
        albums.push(album)
        userMap.set(album.userId, albums)
      })

      const users = []
      userMap.forEach(albums => {
        users.push({userId: albums[0].userId, albums: albums.map(album => ({id: album.id, title: album.title}))})
      })

      return users
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>