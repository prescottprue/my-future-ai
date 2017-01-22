import React from 'react'
import { connect } from 'react-redux'
import { Collapse, Button } from 'reactstrap'

import SimpleList from '../../components/SimpleList'
import UserCard from '../../components/user/card'

import { updateStep, updateHeading, updateActions, toggleCollapse, disableNext, enableNext } from '../../actions/TutorialActions'

@connect((state, props) => ({ step: state.tutorial.progress[8] }))
export default class TutorialStep8 extends React.Component {
  componentWillMount () {
    updateStep(8)
    updateHeading("Connect with partners", "add-user")
    updateActions(8)
    disableNext()
  }

  handleClick () {
    toggleCollapse()
    enableNext()
    // My ID: 'PpYyJpxIXEhn5i4tvS9xa3I8RHg1'
    // Zivile: '7iTjEVxZq2RgkRvlNmKSfuBy4Go1'
    // getPartner()
  }


  render () {
    return (
      <div >
        { this.props.step && this.props.step.showCollapse !== undefined && <Collapse className="text-center" isOpen={ ! this.props.step.showCollapse }>
          <p>Become partners with someone who will be there when you need some extra motivation, advice or just a listening ear!</p>
          <Button className="my-5" color="success" size="lg" onClick={ this.handleClick.bind(this) }>Get a partner</Button>
        </Collapse> }

        { this.props.step && this.props.step.showCollapse !== undefined &&
          <Collapse isOpen={ this.props.step.showCollapse }>
          <p>test</p>
          </Collapse>
        }
      </div>
    )
  }
}
            <UserCard uid="7iTjEVxZq2RgkRvlNmKSfuBy4Go1"/>