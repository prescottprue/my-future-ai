import React, { PropTypes as T } from 'react'
import { FormGroup, Input, Badge } from 'reactstrap'
import { DragSource, DropTarget } from 'react-dnd'
import { ItemTypes } from '../config/constants'

// Components
import ListAction from './ListAction'

// Actions
import { updateAction } from '../actions/FirebaseActions'

const dragSource = {
  beginDrag(props) { return props },
  canDrag(props) { return props.item.actions },
  endDrag(props, monitor) {
    if (typeof props.dndActions.endDrag === 'function') { props.dndActions.endDrag(props.item, monitor.getDropResult()) }
    return props
  }
}

const dropTarget = {
  drop(props, monitor) {
    if (typeof props.dndActions.drop === 'function') { props.dndActions.drop() }
    return props.item
  }
}

@DragSource(ItemTypes.LIST_ITEM, dragSource, (connect) => ({ connectDragSource: connect.dragSource() }))
@DropTarget(ItemTypes.LIST_ITEM, dropTarget, (connect) => ({ connectDropTarget: connect.dropTarget() }))
export default class SimpleList extends React.Component {

  static propTypes = {
    item: T.shape({
      key: T.string.isRequired,
      text: T.string.isRequired,
      priority: T.number
    }),
    actions: T.arrayOf(T.shape({
      func: T.func.isRequired,
      image: T.string.isRequired
    })),
  }

  render () {
    const { connectDragSource, connectDropTarget, item, actions } = this.props

    let style = {
      paddingRight: (actions) ? actions.length * 45 + 10 : 15
    }

    return connectDropTarget(connectDragSource(
      <li className="list-group-item" key={ item.key } style={ style }>
        { item.priority && <Badge className="mr-3">{ item.priority }</Badge> }
        { item.text }
        { actions && actions.map((action, index) => {
          return <ListAction key={ index } action={ action.func.bind(this, item) } image={ action.image } position={ actions.length - index - 1 }/>
        })}
      </li>
    ))
  }
}