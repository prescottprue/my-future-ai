import React from 'react'
import { Collapse, Button } from 'reactstrap'

import SimpleList from '../../components/SimpleList'
import UserCard from '../../components/user/card'

import { updateGoal } from '../../actions/FirebaseActions'
import { updateStep, updateHeading, updateActions, toggleCollapse, disableNext, enableNext } from '../../actions/TutorialActions'

export default class TutorialStep8 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      actions: [
        { func: this.addPartner.bind(this), image: 'addition-sign' },
      ],
      filters: [
        function(item) { return item.primary === false }
      ]
    }
  }

  componentWillMount () {
    updateStep(8)
    updateHeading("Connect with partners", "add-user")
    updateActions(8)
    // disableNext()
  }

  handleClick (gid) {
    toggleCollapse(8, true)
    // enableNext()
    // My ID: 'PpYyJpxIXEhn5i4tvS9xa3I8RHg1'
    // Zivile: '7iTjEVxZq2RgkRvlNmKSfuBy4Go1'

    // setPartner(gid, 'PpYyJpxIXEhn5i4tvS9xa3I8RHg1')
    // getPartner(gid)
  }

  addPartner (goal) {
    updateGoal(goal.key, { partner: 'PpYyJpxIXEhn5i4tvS9xa3I8RHg1' })
  }

  render () {
    let step

    if (this.props.tutorial.hasOwnProperty(8)) {
      step = this.props.tutorial[8]
    }

    return (
      <div >

        <SimpleList
          items={ this.props.goals }
          actions={ this.state.actions }
          filters={ this.state.filters }
          showPartner
        />

        { step &&
          <Collapse className="text-center" isOpen={ ! step.showCollapse }>
            <p>Become partners with someone who will be there when you need some extra motivation, advice or just a listening ear!</p>
            <Button className="my-5" color="success" size="lg" onClick={ this.handleClick.bind(this) }>Get a partner</Button>
          </Collapse>
        }

        { step &&
          <Collapse isOpen={ step.showCollapse }>
          </Collapse>
        }
      </div>
    )
  }
}
            // <UserCard uid="PpYyJpxIXEhn5i4tvS9xa3I8RHg1"/>