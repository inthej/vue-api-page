import axios from "axios"
import LogUtils from "../utils/LogUtils"

export default class PostService { 
  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
  }

  async list() {
    try {
      const path = `${this.apiUrl}/posts`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('PostService.list', err)
      throw err
    }
  }

  async get(id) {
    try {
      const path = `${this.apiUrl}/posts/${id}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('PostService.get', err)
      throw err
    }
  }

  async detail(id) {
    try {
      const comments = await this.comments(id)
      let responseModel = await this.get(id)
      responseModel = {
        ...responseModel,
        comments: comments
      }
      return responseModel
    } catch (err) {
      LogUtils.debug('PostService.detail', err)
      throw err
    }
  }

  async comments(id) {
    try {
      const path = `${this.apiUrl}/posts/${id}/comments`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('PostService.comments', err)
      throw err
    }
  }
}