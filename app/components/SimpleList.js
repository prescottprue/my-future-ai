import React, { PropTypes as T } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import Loading from './Loading'
import Empty from './Empty'
import FirebaseHelper from '../utils/FirebaseHelper'

import ListAction from './ListAction'

export default class SimpleList extends React.Component {

  static propTypes = {
    items: T.object,
    filters: T.array,
    sort: T.arrayOf(T.func)
  }

  render () {

    let { items } = this.props

    if (items === undefined) {
      return <Loading />
    }

    items = new FirebaseHelper(items)

    if (items.data.length === 1) {
      return <Empty />
    }

    if (this.props.filters !== undefined) {
      this.props.filters.forEach((filter) => { items.filter(filter) })
    }

    if (this.props.sort !== undefined) { items.sort(this.props.sort, this.props.sortOrder) }

    return (
      <ListGroup className="mb-3" className="simple-list">
        { items.data.map((item) => {
          return (
            <ListGroupItem key={ item.key }>
              { item.text }
              { this.props.actions.map((action, index) => {
                return <ListAction key={ index } action={ action.func.bind(this, item) } image={ action.image } position={ this.props.actions.length - index - 1 }/>
              })}
            </ListGroupItem>
          )
        }) }
      </ListGroup>
    );
  }
}