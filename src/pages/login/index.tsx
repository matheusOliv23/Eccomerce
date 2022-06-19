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
import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { LockOutlined } from "@mui/icons-material";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useRouter } from "next/router";

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

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export default function Login() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.email && values.password) {
        const isLogged = await auth.signin(values.email, values.password);
        if (isLogged) {
          router.push("/");
        } else {
          alert("Mão deu certo");
        }
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
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
              id="email"
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
    </ThemeProvider>
  );
}
