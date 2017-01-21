import store from '../store'

export function updateHeading(title, image) {
  store.dispatch({ type: 'UPDATE_HEADING', payload: { title, image } })
}

export function updateStep(currentStep, tutorial) {
  store.dispatch({ type: 'UPDATE_STEP', payload: { currentStep } })
}

export function updateActions(currentStep, additionalActions) {
  let nextStep = currentStep + 1,
      previousStep = currentStep - 1,
      maxStep = 8,
      actions = []

  if (nextStep <= maxStep) {
    actions.push({ link: `/tutorial/step-${nextStep}`, text: `Go to Step ${nextStep}`, disabled: false })
  } else {
    actions.push({ link: `/`, text: `Finish`, disabled: false })
  }

  if (additionalActions !== undefined) actions = actions.concat(additionalActions)

  if (previousStep > 0) {
    actions.push({ link: `/tutorial/step-${previousStep}`, text: `Back to Step ${previousStep}`, disabled: false })
  } else if (previousStep === 0) {
    actions.push({ link: `/tutorial`, text: `Back to Introduction`, disabled: false })
  }

  store.dispatch({ type: 'UPDATE_ACTIONS', payload: { actions } })
}

export function getPartner() {
  store.dispatch({ type: 'GET_PARTNER' })
}

export function toggleCollapse() {
  store.dispatch({ type: 'TOGGLE_COLLAPSE' })
}

export function disableNext() {
  store.dispatch({ type: 'DISABLE_NEXT_STATE' })
}

export function enableNext() {
  store.dispatch({ type: 'ENABLE_NEXT_STATE' })
}

export function restoreTutorialProgress(progress) {
  store.dispatch({ type: 'RESTORE_PROGRESS', payload: progress })
}