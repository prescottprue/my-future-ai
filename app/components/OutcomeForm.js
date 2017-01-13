import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormGroup, FormFeedback, Label, Input, Button } from 'reactstrap'

const textarea = (field) => {
  return (
  <FormGroup color={ (field.meta.touched && field.meta.error) ? "danger" : "" }>
    <Input {...field.input} id={ field.input.name } state={ (field.meta.touched && field.meta.error) ? "danger" : "" } type="textarea"/>
    { field.meta.touched && field.meta.error && <FormFeedback>{ field.meta.error }</FormFeedback> }
  </FormGroup>
)}

// Decorate the form component
@reduxForm({ form: 'goalOutcome' })
export default class OutcomeForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="outcome" component={ textarea } />

        <Button outline color="primary" className="mr-1" type="submit">Submit</Button>
      </form>
    )
  }
}