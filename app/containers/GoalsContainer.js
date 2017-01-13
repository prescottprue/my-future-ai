import React from 'react'
import { Link } from 'react-router'
import { Button, Row, Col } from 'reactstrap'

import PageHeading from '../components/PageHeading'
import LinkedList from '../components/LinkedList'

export default class GoalsContainer extends React.Component {

  render () {
    let links = [
      { title: 'List your goals', link: 'goals/list' },
      { title: 'Select primary goals', link: 'goals/primary' },
    ]
    return (
      <div>
        <PageHeading image="loupe" sub="This is a list of tools designed to help you achieve your goals.">Tools for your goals</PageHeading>

        <LinkedList data={links} />
      </div>
    )
  }
}