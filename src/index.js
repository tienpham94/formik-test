import React from 'react'
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const App = ({
  values,
  handleChange
}) => (
  <Form>
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <button>Submit</button>
  </Form>
)

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(App)

render(<FormikApp email='tien@tien.com' />, document.getElementById('root'))
