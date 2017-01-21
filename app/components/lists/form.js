import React, { PropTypes as T } from 'react'
import { Col, FormGroup, Input, Badge, Label } from 'reactstrap'

import { updateGoal } from '../../actions/FirebaseActions'

export default class FormListItem extends React.Component {

  static propTypes = {
    form: T.shape({
      value: T.string.isRequired,
      type: T.string.isRequired,
      handleChange: T.func
    }),
    item: T.object
  }

  handleChange (e) {
    const { handleChange, value } = this.props.form
    const formValue = e.target.value

    if (handleChange !== undefined) {
      handleChange(this.props.item.key, formValue)
    } else {
      let update = {}
      update[value] = (formValue.length > 1) ? formValue : null
      updateGoal(this.props.item.key, update)
    }
  }

  render () {
    let formItem
    const { item, form: { handleChange, value, type } } = this.props

    if (type === "select") {
      formItem = (
        <Input type={ type } name={ value } id={ value } onChange={ this.handleChange.bind(this) } value={ item[value] }>
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
      )
    }

    return (
      <li className="list-group-item form-item">
          { type !== 'textarea' && (
          <FormGroup row>
            <label htmlFor={ value } className="col-6 col-sm-7 col-md-8 col-lg-9 col-form-label">{ item.text }</label>
            <div className="col-6 col-sm-5 col-md-4 col-lg-3">
              { formItem }
              { formItem === undefined && <Input type={ type } name={ value } id={ value } onChange={ this.handleChange.bind(this) } value={ item[value] }/> }

            </div>
          </FormGroup>
          )}
          { type === 'textarea' && (
          <FormGroup row>
            <label htmlFor={ value } className="textarea-form-item-label">{ item.text }</label>
            <Input type={ type } name={ value } id={ value } onChange={ this.handleChange.bind(this) } value={ item[value] } />
          </FormGroup>
          )}
      </li>
    )
  }
}