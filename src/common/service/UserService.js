import axios from "axios"
import LogUtils from "../utils/LogUtils"
import AlbumService from "./AlbumService"
import PostService from "./PostService"

export default class UserService {
  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
    this.albumService = new AlbumService()
    this.postService = new PostService()
  }

  async list() {
    try {
      const path = `${this.apiUrl}/users`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.list', err)
      throw err
    }
  }

  async detailList() {
    try {
      let responseModel = await this.list()
      const albums = await this.albumService.list()
      const photos = await this.albumService.photos()
      const posts = await this.postService.list()
      const comments = await this.postService.comments()
      responseModel = responseModel.map(user => ({
        ...user,
        albums: albums.filter(album => album.userId === user.id)
      }))

      responseModel = responseModel.map(user => ({
        ...user,
        albums: user.albums.map(album => ({
          ...album,
          photos: photos.filter(photo => photo.albumId === album.id)
        }))
      }))

      responseModel = responseModel.map(user => ({
        ...user,
        posts: posts.filter(post => post.userId === user.id)
      }))

      responseModel = responseModel.map(user => ({
        ...user,
        posts: user.posts.map(post => ({
          ...post,
          commnets: comments.filter(comment => comment.postId === post.id)
        }))
      }))
      return responseModel
    } catch (err) {
      LogUtils.debug('UserService.detailList', err)
      throw err
    }
  }

  async get(id) {
    try {
      const path = `${this.apiUrl}/users/${id}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.get', err)
      throw err
    }
  }

  async detail(id) {
    try {
      const albums = await this.userAlbums(id)
      const posts = await this.userPosts(id)
      const todos = await this.userTodos(id)
      let responseModel = await this.get(id)
      responseModel = {
        ...responseModel,
        albums: albums,
        posts: posts,
        todos: todos,
      }
      return responseModel
    } catch (err) {
      LogUtils.debug('UserService.detail', err)
      throw err
    }
  }

  async userAlbums(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/albums`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.userAlbums', err)
      throw err
    }
  }

  async userPosts(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/posts`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.userPosts', err)
      throw err
    }
  }

  async userTodos(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/todos`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.userTodos', err)
      throw err
    }
  }

  async todos() {
    try {
      const path = `${this.apiUrl}/todos`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.todos', err)
      throw err
    }
  }
}