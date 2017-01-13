export default class FirebaseHelper {
  constructor (object) {
    this.data = []

    _.each(object, (value, key) => {
      this.data.push(_.assign(value, { key: key }))
    })

    return this
  }
  filter (filter) {
    if (typeof filter !== 'function') { return this }

    _.remove(this.data, (value, index) => {
      return filter(value)
    })

    return this
  }
}