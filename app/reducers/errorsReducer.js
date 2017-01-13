export default function reducer(state = {
    list: []
  }, action) {

  let newState = {
    list: state.list.slice()
  }

  switch (action.type) {
    case 'ADD_ERROR':
      newState.list.push(action.payload)
      break
    case 'REMOVE_ERRORS':
      newState.list = []
      break
  }

  return newState;
}