import React, { PropTypes as T } from 'react'
import { FormGroup, Input, Badge } from 'reactstrap'
import { DragSource, DropTarget } from 'react-dnd'
import { ItemTypes } from '../../config/constants'

// Components
import ListAction from '../ListAction'
import UserItem from './user'

// Actions
import { updateAction } from '../../actions/FirebaseActions'

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
export default class SimpleListItem extends React.Component {

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

    let textStyle

    if (item.priority) {
      textStyle = { width: '90%' }
    } else {
      textStyle = { width: '100%' }
    }

    return connectDropTarget(connectDragSource(
      <li className="list-group-item" key={ item.key } style={ style }>
        { item.priority && <Badge style={{ width: '8%', marginRight: '2%' }}>{ item.priority }</Badge> }
        <span style={ textStyle }>{ item.text }</span>
        { actions && ! item.partner && actions.map((action, index) => {
          return <ListAction key={ index } action={ action.func.bind(this, item) } image={ action.image } position={ actions.length - index - 1 }/>
        })}
        { this.props.showPartner && item.partner &&
          <UserItem profile={ item.partner } />
        }
      </li>
    ))
  }
}