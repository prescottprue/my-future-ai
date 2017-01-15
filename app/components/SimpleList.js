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
    sort: T.shape({
      property: T.string.isRequired,
      ascending: T.bool
    })
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

    if (this.props.sort !== undefined) { items.sort(this.props.sort.property, this.props.sort.ascending) }

    return (
      <ListGroup className="mb-3">
        { items.data.map((item) => {
          return (
            <ListGroupItem key={ item.key }>
              { item.text }
              { this.props.actions.map((action, index) => {
                return <ListAction key={ index } action={ action.func.bind(this, item.key) } image={ action.image } position={ this.props.actions.length - index - 1 }/>
              })}
            </ListGroupItem>
          )
        }) }
      </ListGroup>
    );
  }
}