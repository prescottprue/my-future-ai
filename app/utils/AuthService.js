import Auth0 from 'auth0-js'

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.auth0 = new Auth0({
      clientID: clientId,
      domain: domain,
      responseType: 'token',
      callbackUrl: window.location.href
    })

    this.login = this.login.bind(this)
  }

  login(params, onError) {
    //redirects the call to auth0 instance
    this.auth0.login(params, onError)
  }

  parseHash(hash) {
    // uses auth0 parseHash method to extract data from url hash
    const authResult = this.auth0.parseHash(hash)
    if (authResult && authResult.idToken) {
      this.setToken(authResult.idToken)
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken(idToken) {
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token')
    this.auth0.logout({ returnTo: 'http://localhost:8080' })
  }
}