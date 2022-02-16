import axios from 'axios'
import LogUtils from '../utils/LogUtils'

export default class ApiService {
  constructor() {
    throw new Error()
  }

  static async posts() {
    try {
      const responseModel = await axios('https://jsonplaceholder.typicode.com/posts')
      return responseModel.data
    } catch (err) {
      LogUtils.debug('ApiService.posts', err)
      throw err
    }
  }

  static async comments() {
    try {
      const responseModel = await axios('https://jsonplaceholder.typicode.com/comments')
      return responseModel.data
    } catch (err) {
      LogUtils.debug('ApiService.comments', err)
      throw err
    }
  }

  static async albums() {
    try {
      const responseModel = await axios('https://jsonplaceholder.typicode.com/albums')
      return responseModel.data
    } catch (err) {
      LogUtils.debug('ApiService.albums', err)
      throw err
    }
  }

  static async photos() {
    try {
      const responseModel = await axios('https://jsonplaceholder.typicode.com/photos')
      return responseModel.data
    } catch (err) {
      LogUtils.debug('ApiService.photos', err)
      throw err
    }
  }

  static async todos() {
    try {
      const responseModel = await axios('https://jsonplaceholder.typicode.com/todos')
      return responseModel.data
    } catch (err) {
      LogUtils.debug('ApiService.todos', err)
      throw err
    }
  }

  static async users() {
    try {
      const responseModel = await axios('https://jsonplaceholder.typicode.com/users')
      return responseModel.data
    } catch (err) {
      LogUtils.debug('ApiService.users', err)
      throw err
    }
  }
}