import { Formik, Field, Form } from "formik";
import { useId } from 'react';
import css from "./logInForm.module.css"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
const LogInForm = () => {
     const dispatch = useDispatch();
  const userLogin = (userData) => {
    dispatch(login(userData));
  };
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log('values', values)
    userLogin(values)
    actions.resetForm()
  }

  return (
    <Formik initialValues={{  email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label} htmlFor="emailId">Email:</label>
        <Field className={css.input} name="email" id={emailId} />
        <label className={css.label} htmlFor="passwordId">Password:</label>
        <Field className={css.input} name="password" type="password" id={passwordId} />
        <button className={css.btn} type="submit">LogIn</button>
      </Form>
      
    </Formik>
  );
};

export default LogInForm;
