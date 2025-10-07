import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Form submission handler
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setApiResponse("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setApiResponse(`✅ Registered successfully! User ID: ${data.id}`);
        resetForm();
      } else {
        setApiResponse("❌ Registration failed.");
      }
    } catch (error) {
      setApiResponse("⚠️ Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-8 border border-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-6">Formik Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block mb-1 font-medium">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>

      {/* API Response */}
      {apiResponse && (
        <div className="mt-4 text-center text-sm font-medium">
          {apiResponse}
        </div>
      )}
    </div>
  );
};

export default FormikForm;
