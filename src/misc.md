<!-- import React from 'react';
import { Grid, Box, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box p={2}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="fullName"
              name="fullName"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Your Message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Send Me Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm; -->


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './ContactForm.css';

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
};

const ContactForm = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ fullName: '', email: '', message: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-grid">
            <div>
              <label htmlFor="fullName">Full Name</label>
              <Field id="fullName" name="fullName" type="text" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="full-width">
              <label htmlFor="message">Your Message</label>
              <Field id="message" name="message" as="textarea" rows="4" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
            <div className="full-width">
              <button className="button" type="submit" disabled={isSubmitting}>
                Send Me Message
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;