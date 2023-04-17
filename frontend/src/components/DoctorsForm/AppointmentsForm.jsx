import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  patientName: "",
  patientEmail: "",
  patientPhone: "",
  comments: "",
};

const validationSchema = Yup.object({
  patientName: Yup.string().required("Le nom du patient est requis"),
  patientEmail: Yup.string()
    .email("Entrer un email valide")
    .required("L'email du patient est requis"),
  patientPhone: Yup.string().required("Le numéro de téléphone du patient est requis"),
  comments: Yup.string(),
});

export default function AppointmentForm({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="patientName"
              label="Nom du patient"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps("patientName")}
              error={formik.touched.patientName && Boolean(formik.errors.patientName)}
              helperText={formik.touched.patientName && formik.errors.patientName}
            />
            <TextField
              id="patientEmail"
              label="Email du patient"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps("patientEmail")}
              error={formik.touched.patientEmail && Boolean(formik.errors.patientEmail)}
              helperText={formik.touched.patientEmail && formik.errors.patientEmail}
            />
            <TextField
              id="patientPhone"
              label="Numéro de téléphone du patient"
              variant="outlined"
              margin="normal"
              {...formik.getFieldProps("patientPhone")}
              error={formik.touched.patientPhone && Boolean(formik.errors.patientPhone)}
              helperText={formik.touched.patientPhone && formik.errors.patientPhone}
            />
            <TextField
              id="comments"
              label="Commentaires"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              {...formik.getFieldProps("comments")}
              error={formik.touched.comments && Boolean(formik.errors.comments)}
              helperText={formik.touched.comments && formik.errors.comments}
            />
            <Button type="submit" variant="contained" sx={{ marginTop: "16px" }}>
              Confirmer le rendez-vous
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
