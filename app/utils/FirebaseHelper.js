export default class FirebaseHelper {
  constructor (object) {
    this.data = []

    _.each(object, (value, key) => {
      this.data.push(_.assign(value, { key: key }))
    })

    return this
  }

  filter (filter) {
    if (typeof filter === 'function') {
      _.remove(this.data, (value, index) => { return filter(value) })
    }

    return this
  }

  sort (func, order) {
    if (func.constructor === Array) {
      this.data = _.orderBy(this.data, func, order)
    } else if (typeof filter === 'function') {
      this.data = _.orderBy(this.data, [ func ], [ order ])
    }

    return this
  }
}