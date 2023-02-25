import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';

const userSchema = object({
  name: string().required(),
  number: string().required().min(5).max(20),
});

export const AddContact = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        addContact({
          ...values,
          id: nanoid(),
        });
        resetForm();
      }}
      validationSchema={userSchema}
    >
      <Form>
        <h3>Name</h3>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />
        <h3>Number</h3>
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
