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

  sort (propertyName, ascending = true) {
    this.data.sort((a, b) => {
      if (a[propertyName] < b[propertyName]) {
        return (ascending) ? -1 : 1
      } else if (a[propertyName] > b[propertyName]) {
        return (ascending) ? 1 : -1
      } else {
        return 0
      }
    })

    return this
  }
}