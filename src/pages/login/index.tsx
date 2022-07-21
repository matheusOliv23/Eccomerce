import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { LockOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useAuth } from "../../hooks/useAuth";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

interface AuthenticateForm {
  email: string;
  password: string;
  errors: string[];
}

interface LoginPageProps {
  returnUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const returnUrl = context.query.returnUrl ?? null;
  return {
    props: { returnUrl: returnUrl },
  };
};

export default function Login() {
  const auth = useAuth();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const authenticateForm: AuthenticateForm = {
    email: "",
    password: "",
    errors: [],
  };

  const handleSubmit = async (
    values: AuthenticateForm,
    actions: FormikHelpers<AuthenticateForm>
  ) => {
    try {
      actions.setSubmitting(true);
      await auth.authenticate(values.email, values.password);

      // if (returnUrl) await router.push(returnUrl);
      await router.push("/");
    } catch (error: any) {
      if (error.response.status === 401) {
        actions.setErrors({
          errors: [...values.errors, "Usuário ou senha inválidos"],
        });
      }
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: authenticateForm,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            fullWidth
            id="username"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
