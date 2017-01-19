import store from '../store'

export function updateHeading(title, image) {
  store.dispatch({ type: 'UPDATE_HEADING', payload: { title, image } });
}

export function updateStep(currentStep) {
  store.dispatch({ type: 'UPDATE_STEP', payload: { currentStep } });
}

export function updateActions(currentStep, additionalActions) {
  let nextStep = currentStep + 1,
      previousStep = currentStep - 1,
      maxStep = 7,
      actions = []

  if (nextStep < maxStep) actions.push({ link: `/tutorial/step-${nextStep}`, text: `Go to Step ${nextStep}`, disabled: false })

  if (additionalActions !== undefined) actions = actions.concat(additionalActions)

  if (previousStep > 0) actions.push({ link: `/tutorial/step-${previousStep}`, text: `Back to Step ${previousStep}`, disabled: false })

  store.dispatch({ type: 'UPDATE_ACTIONS', payload: { actions } });
}

export function disableNext() {
  store.dispatch({ type: 'DISABLE_NEXT_STATE' });
}

export function enableNext() {
  store.dispatch({ type: 'ENABLE_NEXT_STATE' });
}