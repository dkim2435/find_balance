import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const AddTransaction = () => (
  <Form>
    <Form.Group grouped>
      <label>Select One</label>
      <Form.Field
        label='Income'
        control='input'
        type='radio'
        name='htmlRadios'
      />
      <Form.Field
        label='Expense'
        control='input'
        type='radio'
        name='htmlRadios'
      />
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field label='Enter Amount ($)' control='input' />
    </Form.Group>
    <Form.Field label='Description' control='textarea' rows='3' />
    <Button>Add</Button>
  </Form>
)

export default AddTransaction