import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { index } from "./styles";
import api from "../../services/api";

const Login = () => {
  const classes = index();

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const validateForm = values => {
    const newErrors = {};

    if (!values.email) {
      newErrors.email = { error: true, helperText: "Informe seu e-mail." };
    }

    if (!values.password) {
      newErrors.password = { error: true, helperText: "Informe sua senha." };
    } else if (values.password.length < 6) {
      newErrors.password = { error: true, helperText: "Senha muito curta." };
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const login = async values => {
    if (!validateForm(values)) {
      return false;
    }

    const requestObject = {
      email: values.email,
      password: values.password
    };

    try {
      const test = await api.post("users/login", requestObject);
      if (test.data.status) {
        localStorage.setItem("@User", JSON.stringify(test.data));
        history.push("/painel");
      } else {
        setErrors({
          email: { error: true, helperText: "Email ou senha incorretos" },
          password: { error: true, helperText: "Email ou senha incorretos" }
        });
      }
    } catch (err) {
      console.log("erro === ", err);
    }

    return true;
  };

  const resetErrors = field => {
    setErrors({ ...errors, [field]: { error: false, helperText: "" } });
  };

  const valuesFormik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: login
  });

  useEffect(() => {}, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={valuesFormik.handleSubmit}>
          <TextField
            {...errors.email}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            value={valuesFormik.values.email}
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.password}
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            value={valuesFormik.values.password}
            label="Senha"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs className={classes.flex}>
              <Link
                variant="body2"
                onClick={() => history.push("/recuperar-senha")}
                className={classes.hover}
              >
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link
                variant="body2"
                onClick={() => history.push("/cadastro")}
                className={classes.hover}
              >
                Criar conta
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
