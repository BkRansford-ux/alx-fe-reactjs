import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    alert(`User Registered (Formik): ${values.username}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-6 rounded-2xl shadow-md w-80">
          <h2 className="text-2xl font-semibold text-center mb-4">
            User Registration (Formik)
          </h2>

          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 mb-3 w-full rounded"
          />
          <ErrorMessage
            name="username"
            component="p"
            className="text-red-500 text-sm mb-2"
          />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 mb-3 w-full rounded"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm mb-2"
          />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 mb-3 w-full rounded"
          />
          <ErrorMessage
            name="password"
            component="p"
            className="text-red-500 text-sm mb-2"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 w-full rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
