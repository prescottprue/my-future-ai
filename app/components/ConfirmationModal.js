import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, FormFeedback, FormText, Label } from 'reactstrap'

export default class ConfirmationModal extends React.Component {

  render () {
    return (
      <Modal isOpen={ this.props.isOpen } toggle={ this.props.toggle }>
          <ModalBody>
            { this.props.children }
          </ModalBody>
          <ModalFooter>
            { this.props.primary && <Button color="primary" type="submit">Submit</Button> }
            { this.props.danger && <Button color="danger" outline onClick={ this.props.danger } type="button">Delete</Button> }
            { this.props.toggle && <Button color="secondary" onClick={ this.props.toggle } type="button">Cancel</Button> }
          </ModalFooter>
      </Modal>
    )
  }
}