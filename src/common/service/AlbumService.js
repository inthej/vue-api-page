import axios from "axios"
import LogUtils from "../utils/LogUtils"

export default class AlbumService {
  constructor() {
    this.apiUrl = 'https://jsonplaceholder.typicode.com'
  }

  async list() {
    try {
      const path = `${this.apiUrl}/albums`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('AlbumService.list', err)
      throw err
    }
  }

  async detailList() {
    try {
      let responseModel = await this.list()
      const photos = await this.photos()
      responseModel = responseModel.map(album => ({
        ...album,
        photos: photos.filter(photo => photo.albumId === album.id)
      }))
      return responseModel
    } catch (err) {
      LogUtils.debug('AlbumService.detailList', err)
    }
  }

  async get(id) {
    try {
      const path = `${this.apiUrl}/albums/${id}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('AlbumService.get', err)
      throw err
    }
  }

  async detail(id) {
    try {
      const photos = await this.albumPhotos(id)
      let responseModel = await this.get(id)
      responseModel = {
        ...responseModel,
        photos: photos
      }
      return responseModel
    } catch (err) {
      LogUtils.debug('Albumservice.detail', err)
      throw err
    }
  }

  async photos() {
    try {
      const path = `${this.apiUrl}/photos`
      const responseModel = await axios(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('AlbumService.photos', err)
      throw err
    }
  }

  async albumPhotos(id) {
    try {
      const path = `${this.apiUrl}/albums/${id}/photos`
      const responseModel = await axios(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('AlbumService.albumPhotos', err)
      throw err
    }
  }
}