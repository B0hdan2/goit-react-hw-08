import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number cannot exceed 50 characters"),
  });

  const newUser = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={newUser}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type='text' name='name'></Field>
            <ErrorMessage name='name' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type='text' name='number'></Field>
            <ErrorMessage name='number' component='span' className={s.error} />
          </label>
          <button className={s.button} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
