import axios from "axios"
import LogUtils from "../utils/LogUtils"

export default class UserService {
  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
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
      const albums = await this.albums(id)
      const posts = await this.posts(id)
      const todos = await this.todos(id)
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

  async albums(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/albums`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.albums', err)
      throw err
    }
  }

  async posts(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/posts`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.posts', err)
      throw err
    }
  }

  async todos(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/todos`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.todos', err)
      throw err
    }
  }
}