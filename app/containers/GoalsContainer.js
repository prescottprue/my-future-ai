import React from 'react'
import { Link } from 'react-router'
import { Button, Row, Col } from 'reactstrap'

import PageHeading from '../components/PageHeading'
import LinkedList from '../components/LinkedList'
import ActionsCardsList from '../components/ActionsCardsList'

export default class GoalsContainer extends React.Component {

  render () {
    let links = [
      { title: 'List goals', link: 'goals/list', image: 'edit' },
      { title: 'Select primary', link: 'goals/primary', image: 'list' },
    ]
    return (
      <div>
        <PageHeading image="loupe" sub="This is a list of tools designed to help you achieve your goals.">Tools for your goals</PageHeading>

        <ActionsCardsList data={links} />
      </div>
    )
  }
}