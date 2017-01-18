import React, { PropTypes as T } from 'react'
import { InputGroup, Input, InputGroupButton } from 'reactstrap'

export default class ListGoalsContainer extends React.Component {
  static propTypes = {
    handleAdd: T.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { newGoal: '' }
  }

  handleChange(event) {
    this.setState({ newGoal: event.target.value })
  }

  handleAdd () {
    this.props.handleAdd(this.state.newGoal)
    this.state.newGoal = ''
  }

  render () {
    return (
      <div>
        <InputGroup className="mt-1">
          <Input style={{ padding: '.75rem 1.25rem' }} name="add" placeholder="I want to..." value={ this.state.newGoal } onChange={ this.handleChange.bind(this) }/>
          <InputGroupButton onClick={ this.handleAdd.bind(this) }>Add</InputGroupButton>
        </InputGroup>

        { this.props.children }
      </div>
    )
  }
}