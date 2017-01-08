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
import TutorialConnectContainer from '../containers/TutorialConnectContainer'
import SelectPrimaryGoalsContainer from '../containers/SelectPrimaryGoalsContainer'
import DashboardContainer from '../containers/DashboardContainer'
import ConnectionsContainer from '../containers/ConnectionsContainer'
import GoalsContainer from '../containers/GoalsContainer'

// Goal containers
import ListGoalsContainer from '../containers/goals/list'
import PrimaryGoalsContainer from '../containers/goals/primary'
import GoalContainer from '../containers/goals/detail'
import GoalActionsContainer from '../containers/goals/actions'

// Users containers
import UserContainer from '../containers/users/detail'
import UsersContainer from '../containers/users/list'

import TutorialWrapper from '../components/TutorialWrapper'
import ConnectWrapper from '../components/ConnectWrapper'

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ MainContainer }>
          <Route component={ NavigationContainer }>
            <IndexRoute component={ DashboardContainer } />
            <Route path='goals'>
              <IndexRoute component={ GoalsContainer } />
              <Route path='list' component={ ListGoalsContainer } />
              <Route path='primary' component={ PrimaryGoalsContainer } />
              <Route path=':id'>
                <IndexRoute component={ GoalContainer } />
                <Route path='actions' component={ GoalActionsContainer } />
              </Route>
            </Route>
            <Route path='connections' component={ ConnectionsContainer } />
            <Route path='users' component={ UsersContainer } />
            <Route path='users/:id' component={ UserContainer } />
          </Route>
        </Route>
      </Router>
    )
  }
}
          // <Route component={ TutorialWrapper }>
          //   <Route path='tutorial' component={ TutorialContainer } />
          //   <Route path='tutorial/goals' component={ TutorialGoalsContainer } />
          //   <Route path='tutorial/goals/list' component={ ListGoalsContainer } />
          //   <Route path='tutorial/goals/select' component={ SelectPrimaryGoalsContainer } />
          //   <Route path='tutorial/connect'>
          //     <IndexRoute component={ TutorialConnectContainer } />
          //     <Route component={ ConnectWrapper }>
          //       <Route path='others' component={ TutorialConnectOthersContainer } />
          //       <Route path='mentors' component={ TutorialConnectMentorsContainer } />
          //       <Route path='experts' component={ TutorialConnectExpertsContainer } />
          //     </Route>
          //   </Route>
          // </Route>