import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.name.trim()) {
            errors.name = "The field name is empty";
          } else if (!values.message.trim()) {
            errors.message = "The field message is empty";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />

            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />

            <ErrorMessage name="email" component="div" />

            <Field type="text" name="message" />

            <ErrorMessage name="message" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Send Mail
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
