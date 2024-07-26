import { Formik, Field, Form } from "formik";
import { useId } from 'react';
import { registration } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
const dispatch = useDispatch();
  const userRegistration = (userData) => {
    dispatch(registration(userData));
  };
  const handleSubmit = (values, actions) => {
    console.log('values', values)
    userRegistration(values)
    actions.resetForm()
  }
  return (
    <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="nameId">Name:</label>
        <Field name="name" id={nameId} />
        <label htmlFor="emailId">Email:</label>
        <Field name="email" id={emailId} />
        <label htmlFor="passwordId">Password:</label>
        <Field name="password" type="password" id={passwordId} />
        <button type="submit">Registration</button>
      </Form>
      
    </Formik>
  );
};

export default RegistrationForm;
