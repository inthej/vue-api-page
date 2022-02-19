import axios from "axios"
import LogUtils from "../utils/LogUtils"

export default class UserService {
  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
  }

  static async list() {
    try {
      const path = `${this.apiUrl}/users`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('UserService.list', err)
      throw err
    }
  }

  static async get(id) {
    try {
      const path = `${this.apiUrl}/users/${id}`
      const responseModel = await axios.get(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('UserService.get', err)
      throw err
    }
  }

  static async albums(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/albums`
      const responseModel = await axios.get(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('UserService.albums', err)
      throw err
    }
  }

  static async todos(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/todos`
      const responseModel = await axios.get(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('UserService.todos', err)
      throw err
    }
  }

  static async posts(id) {
    try {
      const path = `${this.apiUrl}/users/${id}/posts`
      const responseModel = await axios.get(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('UserService.posts', err)
      throw err
    }
  }

  static async detailList() {

  }
}