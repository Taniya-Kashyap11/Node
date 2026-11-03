
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import api from "../services/api";

function ComplaintForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      location: ""
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required"),

      description: Yup.string()
        .required("Description is required"),

      location: Yup.string()
        .required("Location is required")
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        setMessage("");

        const response = await api.post(
          "/complaints",
          values
        );

        setMessage("Complaint submitted successfully!");

        resetForm();

      } catch (error) {
        setMessage(
          error.response?.data?.message ||
          "Something went wrong!"
        );

      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>

        <Form.Control
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={
            formik.touched.title &&
            !!formik.errors.title
          }
        />

        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>

        <Form.Control
          as="textarea"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={
            formik.touched.description &&
            !!formik.errors.description
          }
        />

        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>

        <Form.Control
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={
            formik.touched.location &&
            !!formik.errors.location
          }
        />

        <Form.Control.Feedback type="invalid">
          {formik.errors.location}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        type="submit"
        disabled={loading || formik.isSubmitting}
      >
        {loading ? "Submitting..." : "Submit Complaint"}
      </Button>

      {message && (
        <Alert className="mt-3">
          {message}
        </Alert>
      )}

    </Form>
  );
}

export default ComplaintForm;
