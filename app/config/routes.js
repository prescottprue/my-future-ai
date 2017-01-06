import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AuthService from '../utils/AuthService'

import MainContainer from '../containers/MainContainer'
import NavigationContainer from '../containers/NavigationContainer'
import TutorialContainer from '../containers/TutorialContainer'
import TutorialConnectOthersContainer from '../containers/TutorialConnectOthersContainer'
import TutorialConnectExpertsContainer from '../containers/TutorialConnectExpertsContainer'
import TutorialConnectMentorsContainer from '../containers/TutorialConnectMentorsContainer'
import TutorialGoalsContainer from '../containers/TutorialGoalsContainer'
import ListYourGoalsContainer from '../containers/ListYourGoalsContainer'
import TutorialConnectContainer from '../containers/TutorialConnectContainer'
import SelectPrimaryGoalsContainer from '../containers/SelectPrimaryGoalsContainer'
import DashboardContainer from '../containers/DashboardContainer'
import PageContainer from '../containers/PageContainer'
import ConnectionsContainer from '../containers/ConnectionsContainer'

import TutorialWrapper from '../components/TutorialWrapper'
import ConnectWrapper from '../components/ConnectWrapper'


// validate authentication for private routes
// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/' })
//   }
// }

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ MainContainer }>
          <Route component={ NavigationContainer }>
            <IndexRoute component={ DashboardContainer } />
            <Route path='connections' component={ ConnectionsContainer } />
          </Route>
          <Route component={ TutorialWrapper }>
            <Route path='tutorial' component={ TutorialContainer } />
            <Route path='tutorial/goals' component={ TutorialGoalsContainer } />
            <Route path='tutorial/goals/list' component={ ListYourGoalsContainer } />
            <Route path='tutorial/goals/select' component={ SelectPrimaryGoalsContainer } />
            <Route path='tutorial/connect'>
              <IndexRoute component={ TutorialConnectContainer } />
              <Route component={ ConnectWrapper }>
                <Route path='others' component={ TutorialConnectOthersContainer } />
                <Route path='mentors' component={ TutorialConnectMentorsContainer } />
                <Route path='experts' component={ TutorialConnectExpertsContainer } />
              </Route>
            </Route>
          </Route>
        </Route>
      </Router>
    )
  }
}