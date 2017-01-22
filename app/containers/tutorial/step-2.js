import React from 'react'
import { connect } from 'react-redux'
import { Collapse } from 'reactstrap'

import SimpleList from '../../components/SimpleList'

import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

@connect((state) => ({ state: state.tutorial[2] }))
export default class TutorialStep2 extends React.Component {

  constructor (props) {
    super(props)
    this.state = { explanation: false }
  }

  componentWillMount () {
    updateStep(2)
    updateHeading("Timeframes", "hourglass")
    updateActions(2, [
      { func: this.explanation.bind(this), text: "Why should I do this?" },
    ])
  }

  explanation () {
    updateActions(2)
    this.setState({ explanation: true })
  }

  render () {
    return (
      <div>
        <p>Go over the list you made, estimating when you expect to reach those outcomes.</p>

        <SimpleList
          items={ this.props.goals }
          formItem={{ type: "select", value: 'timeframe' }}
        />

        <Collapse isOpen={ this.state.explanation }>
          <p><b>Why it is neccessary that you do this</b></p>
          <p>
            It’s helpful to see what sort of a time frame you’re operating in.
          </p>
          <p>
            Note how your list came out. Some people find that the list they made is dominated by things they want today. Others find their greatest dreams are far in the future, in some imagined period of total achievement and fulfillment. If all your goals are short term, you need to start taking a longer view of potential and possibility. If all your goals are long term, you need to first develop some steps that can lead you in the direction you expect to go. A journey of a thousand miles begins with a single step. It’s important to be aware of both the first steps and the final ones.
          </p>
        </Collapse>
      </div>
    )
  }
}