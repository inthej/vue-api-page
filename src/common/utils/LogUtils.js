export default class LogUtils {
  constructor() {
    throw new Error()
  }

  static debug(message, ...optionalParams) {
    console.log(message, optionalParams)
  }

  static info(message, ...optionalParams) {
    console.info(message, optionalParams)
  }

  static warn(message, ...optionalParams) {
    console.warn(message, optionalParams)
  }

  static error(message, ...optionalParams) {
    console.error(message, optionalParams)
  }

  static table(message, ...optionalParams) {
    console.table(message, optionalParams)
  }
}