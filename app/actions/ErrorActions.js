import store from '../store'

export function addError(text, bold) {
  store.dispatch({ type: 'ADD_ERROR', payload: { text, bold } });
}

export function removeErrors() {
  store.dispatch({ type: 'REMOVE_ERRORS' });
}