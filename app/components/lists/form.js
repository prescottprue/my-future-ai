import React, { PropTypes as T } from 'react'
import { Col, FormGroup, Input, Badge, Label } from 'reactstrap'

export default class FormListItem extends React.Component {

  static propTypes = {
    handleChange: T.func.isRequired
  }

  handleChange (e) {
    this.props.handleChange(this.props.item.key, e.target.value)
  }

  render () {
    const { item, handleChange } = this.props

    return (
      <li className="list-group-item form-item">
        <FormGroup row>
          <label htmlFor="select-timeframe" className="col-8 col-sm-9 col-md-10 col-form-label">{ item.text }</label>
          <div className="col-4 col-sm-3 col-md-2">
            <Input type="select" name="selectTimeframe" id="select-timeframe" onChange={ this.handleChange.bind(this) } value={ item.timeframe }>
              <option value="1">1 month</option>
              <option value="2">3 months</option>
              <option value="3">6 months</option>
              <option value="4">1 year</option>
              <option value="5">2 years</option>
              <option value="6">5 years</option>
              <option value="7">10 years</option>
              <option value="8">20 years</option>
              <option value="9">Lifetime</option>
            </Input>
          </div>
        </FormGroup>
      </li>
    )
  }
}