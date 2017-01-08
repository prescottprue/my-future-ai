import React, { PropTypes as T } from 'react'
import { Row, Col, FormGroup, Input, Label } from 'reactstrap'
import _ from 'lodash'
import Loading from '../components/Loading'
import Empty from '../components/Empty'

export default class CheckboxList extends React.Component {

  static propTypes = {
    items: T.object,
    checkProp: T.string.isRequired,
    checkHandler: T.func.isRequired,
  }

  render () {
    let { items, checkProp, checkHandler } = this.props
    let itemsList = []

    if (items === undefined) {
      return <Loading/>
    }

    if (items === null) {
      return <Empty/>
    }

    Object.keys(items).forEach((itemId) => {
      itemsList.push((
        <FormGroup key={ itemId } check>
          <Label check>
            <Input type="checkbox" name={ itemId }
              checked={ items[itemId][checkProp] }
              onChange={ checkHandler.bind(null, itemId, items[itemId][checkProp] ) }/>{' '}
            { items[itemId].text }
            <br />
          </Label>
        </FormGroup>
      ))
    })

    return (
      <Row className="mt-1">
        <Col xs="12">
          { itemsList }
        </Col>
      </Row>
    )
  }
}