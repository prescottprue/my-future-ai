import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, FormFeedback, FormText, Label } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

// Decorate the form component
@reduxForm({
  form: 'goalAction',
  enableReinitialize: true
})
export default class GoalContainer extends React.Component {

  render () {
    return (
      <Modal isOpen={ this.props.isOpen } toggle={ this.props.toggle }>
        <form
          id="goalAction"
          onSubmit={ this.props.handleSubmit(this.props.onSubmit) }
        >
          { this.props.item && <ModalHeader toggle={ this.props.toggle }>Edit action</ModalHeader> }
          <ModalBody>
            <FormGroup>
              <Label for="actionText">Action</Label>
              <Field id="actionText" name="text" component="input" type="text" className="form-control"/>
            </FormGroup>
            <FormGroup>
              <Label for="actionPriority">Priority</Label>
              <Field id="actionPriority" name="priority" component="input" normalize={ value => parseInt(value) } type="number" className="form-control" min="1" max="9"/>
              <FormText color="muted">Action priority - 1 (lowest) to 9 (highest).</FormText>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Submit</Button>
            { this.props.danger && <Button color="danger" outline onClick={ this.props.danger } type="button">Delete</Button> }
            { this.props.toggle && <Button color="secondary" onClick={ this.props.toggle } type="button">Cancel</Button> }
          </ModalFooter>
        </form>
      </Modal>
    )
  }
}