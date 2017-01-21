export default function reducer(state = {
    "heading": {
      title: "",
      subtitle: "",
      image: ""
    },
    "actions": [],
    restored: false,
    "progress": {
      "currentStep": null,
      "1": {},
      "2": {
        explanation: false
      },
      "3": {},
      "4": {},
      "5": {},
      "6": {},
      "7": {}
    }
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

      if (newState.progress === null) { newState.progress = {} }

      newState.progress.currentStep = currentStep

      if ( ! newState.progress.hasOwnProperty(currentStep)) {
        newState.progress[currentStep] = {}
      }

      if ( ! newState.progress.hasOwnProperty(currentStep - 1)) {
        newState.progress[currentStep - 1] = {}
      }

      if (currentStep > 1) { newState.progress[currentStep - 1].completed = true }
      newState.progress[currentStep].started = true
      break
    case 'RESTORE_PROGRESS':
      newState.restored = true
      newState.progress = action.payload
      break
    case 'GET_PARTNER':
      break
    case 'TOGGLE_COLLAPSE':
      let showCollapse = newState.progress[newState.progress.currentStep].showCollapse

      newState.progress[newState.progress.currentStep].showCollapse = (showCollapse === undefined) ? true : ! showCollapse
      break
  }

  return newState
}