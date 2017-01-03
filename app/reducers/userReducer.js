import AuthService from '../utils/AuthService';

export default function reducer(state = {
    auth: new AuthService('8YBjwULgSuxf6aVvzOmvKqgeez8ovpcM', 'deividas.eu.auth0.com')
  }, action) {

  return state;
}