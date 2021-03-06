import React, { PropTypes as T } from 'react'
import { Row, Col, ListGroup } from 'reactstrap'

import Loading from './Loading'
import Empty from './Empty'
import FirebaseHelper from '../utils/FirebaseHelper'

import SimpleListItem from './lists/simple-item'
import FormSelectItem from './lists/form'
import CustomDragLayer from '../components/CustomDragLayer'

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
    formItem: T.shape({
      type: T.string.isRequired,
      handleChange: T.func
    }),
    showPartner: T.bool
    // dndActions: T.
  }

  static defaultProps = {
    sort: [ (o) => { return o.cdate } ],
    sortOrder: [ "desc" ]
  }

  render () {
    let { items, filters, sort, sortOrder, actions, dndActions, formItem } = this.props

    if (items === undefined) { return <Loading /> }

    items = new FirebaseHelper(items)

    if (filters !== undefined) { filters.forEach((filter) => { items.filter(filter) }) }

    if (items.data.length === 0) { return <Empty /> }

    if (sort) { items.sort(sort, sortOrder) }

    return (
      <Row className="my-3">
        <Col xs={12}>
          <CustomDragLayer />
          <ListGroup className="simple-list">
            { items.data.map(item => {
              if (formItem) { return <FormSelectItem key={ item.key } form={ formItem } item={ item }/> }
              else { return <SimpleListItem key={ item.key } item={ item } actions={ actions } dndActions={ dndActions } showPartner={ this.props.showPartner } /> }
            }) }
          </ListGroup>
        </Col>
      </Row>
    )
  }
}