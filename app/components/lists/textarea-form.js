import React, { PropTypes as T } from 'react'
import { FormGroup, Input } from 'reactstrap'

export default class FormTextAreaItem extends React.Component {

  static propTypes = {
    handleChange: T.func.isRequired,
    value: T.string.isRequired
  }

  handleChange (e) {
    this.props.handleChange(this.props.item.key, e.target.value)
  }

  render () {
    const { item, handleChange, value } = this.props

    return (
      <li className="list-group-item form-item">
        <FormGroup row>
          <label htmlFor="describe-reasons" className="textarea-form-item-label">{ item.text }</label>
          <Input type="textarea" name="describe-reasons" id="describe-reasons" onChange={ this.handleChange.bind(this) } value={ item[value] } />
        </FormGroup>
      </li>
    )
  }
}