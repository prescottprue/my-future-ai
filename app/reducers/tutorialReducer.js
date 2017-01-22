export default function reducer(state = {
    heading: {
      title: "",
      subtitle: "",
      image: ""
    },
    actions: [],
  }, action) {

  let newState = { ...state }

  switch (action.type) {
    case 'UPDATE_HEADING':
      newState.heading.title = action.payload.title
      newState.heading.image = action.payload.image
      break
    case 'UPDATE_ACTIONS':
      newState.actions = action.payload.actions
      break
    case 'DISABLE_NEXT_STATE':
      newState.actions = newState.actions.slice()
      newState.actions[0].disabled = true
      break
    case 'ENABLE_NEXT_STATE':
      newState.actions = newState.actions.slice()
      newState.actions[0].disabled = false
      break
    case 'UPDATE_STEP':
      let { currentStep } = action.payload

      newState.heading.subtitle = (currentStep === 0) ? "" : "Step " + currentStep
      break
  }

  return newState
}