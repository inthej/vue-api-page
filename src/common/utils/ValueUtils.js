export default class ValueUtils {
  constructor() {
    throw new Error()
  }

  static empty(str, includeBlank = true) {
    const empty = str === undefined || str === null || (includeBlank && str === '')
    return empty
  }

  static nvl(str, defaultValue = '') {
    if (ValueUtils.empty(str)) return defaultValue
    return str
  }
}