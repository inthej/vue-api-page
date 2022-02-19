import axios from "axios"
import LogUtils from "../utils/LogUtils"

export default class AlbumService {
  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
  }

  static async list() {
    try {
      const path = `${this.apiUrl}/albums`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('AlbumService.list', err)
      throw err
    }
  }

  static async get(id) {
    try {
      const path = `${this.apiUrl}/albums/${id}`
      const responseModel = await axios.get(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('AlbumService.get', err)
      throw err
    }
  }

  static async photos(id) {
    try {
      const path = `${this.apiUrl}/albums/${id}/photos`
      const responseModel = await axios(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('AlbumService.photos', err)
      throw err
    }
  }
}