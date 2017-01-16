import React, { PropTypes as T } from 'react'
import { Row, Col, ListGroup } from 'reactstrap'

import Loading from './Loading'
import Empty from './Empty'
import FirebaseHelper from '../utils/FirebaseHelper'

import SimpleListItem from './SimpleListItem'

export default class SimpleList extends React.Component {

  static propTypes = {
    items: T.object,
    sort: T.arrayOf(T.func),
    sortOrder: T.arrayOf(T.string),
    filters: T.arrayOf(T.func),
    actions: T.arrayOf(T.shape({
      func: T.func.isRequired,
      image: T.string.isRequired
    })),
    // dndActions: T.
  }

  render () {
    let { items, filters, sort, sortOrder, actions, dndActions } = this.props

    if (items === undefined) { return <Loading /> }

    items = new FirebaseHelper(items)

    if (items.data.length === 1) { return <Empty /> }

    if (filters !== undefined) { filters.forEach((filter) => { items.filter(filter) }) }
    if (sort !== undefined) { items.sort(sort, sortOrder) }

    return (
      <Row className="my-3">
        <Col xs={12}>
          <ListGroup className="simple-list">
            { items.data.map((item) => {
              return <SimpleListItem key={ item.key } item={ item } actions={ actions } dndActions={ dndActions } />
            }) }
          </ListGroup>
        </Col>
      </Row>
    )
  }
}