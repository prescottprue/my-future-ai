import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainContainer from '../containers/MainContainer';
import NavigationContainer from '../containers/NavigationContainer';
import TutorialContainer from '../containers/TutorialContainer';
import TutorialGoalsContainer from '../containers/TutorialGoalsContainer';
import ListYourGoalsContainer from '../containers/ListYourGoalsContainer';
import ConnectWithOthersContainer from '../containers/ConnectWithOthersContainer';
import SelectPrimaryGoalsContainer from '../containers/SelectPrimaryGoalsContainer';
import DashboardContainer from '../containers/DashboardContainer';
import AuthContainer from '../containers/AuthContainer';
import PageContainer from '../containers/PageContainer';

export default class Routes extends React.Component {
  render () {
    return (<Router history={ hashHistory }>
      <Route path='/' component={ MainContainer }>
        <IndexRoute component={ AuthContainer } />
        <Route path='tutorial' component={ TutorialContainer } />
        <Route path='tutorial/goals' component={ TutorialGoalsContainer } />
        <Route path='tutorial/goals/list' component={ ListYourGoalsContainer } />
        <Route path='tutorial/goals/select' component={ SelectPrimaryGoalsContainer } />
        <Route path='tutorial/friends' component={ ConnectWithOthersContainer } />
        <Route component={ NavigationContainer }>
          <Route path='me' component={ DashboardContainer } />
          <Route path='goals' component={ PageContainer } />
          <Route path='connections' component={ PageContainer } />
        </Route>
      </Route>
    </Router>)
  }
}