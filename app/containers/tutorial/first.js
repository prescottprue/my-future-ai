import React from 'react'

// Components
import ListTool from '../../components/tools/list'
import SimpleList from '../../components/SimpleList'
import ConfirmationModal from '../../components/ConfirmationModal'

import { addGoal, deleteGoal } from '../../actions/FirebaseActions'
import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

export default class TutorialStepOne extends React.Component {

  constructor (props) {
    super(props)
    this.state = { collapse: true, modal: false }
  }

  componentWillMount () {
    updateStep(1)
    updateHeading("List", "edit")
    updateActions(1)
  }

  toggleModal (item) {
    this.setState({ ...this.state, modal: !this.state.modal, item })
  }

  actionDelete () {
    deleteGoal(this.state.item.key)
    this.toggleModal()
  }

  render () {
    let actions = [
      { func: this.toggleModal.bind(this), image: 'trash-can-black-symbol' },
    ]

    return (
      <div>
        <p>Start by making an inventory of your dreams, the things you want to have, do, be, and share.</p>

        <ListTool handleAdd={ addGoal }>
          <SimpleList
            items={ this.props.goals }
            actions={ actions }
          />
        </ListTool>

        <p><b>Tips:</b></p>
        <ul>
          <li>Spend at least <b>10 to 15 minutes</b>.</li>
          <li>Skip the "how can I do this?" part.</li>
          <li><b>Abbreviate</b> whenever possible.</li>
          <li>State your outcome in positive terms.</li>
          <li>Your outcome must be initiated and maintained by you.</li>
          <li>Your outcome must be one that benefits you and other people.</li>
        </ul>

        <ConfirmationModal isOpen={ this.state.modal } danger={ this.actionDelete.bind(this) } toggle={ this.toggleModal.bind(this) }>
          Are you sure you want to delete this goal?
        </ConfirmationModal>
      </div>
    )
  }
}