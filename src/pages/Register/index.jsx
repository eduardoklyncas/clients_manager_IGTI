import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { index } from "./styles";
import api from "../../services/api";

const Register = () => {
  const classes = index();

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const validateForm = values => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = { error: true, helperText: "Informe o nome da loja." };
    }

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

  const register = async values => {
    if (!validateForm(values)) {
      return false;
    }

    const requestObject = {
      name: valuesFormik.values.name,
      email: valuesFormik.values.email,
      password: valuesFormik.values.password
    };

    console.log("requestObject", requestObject);

    /// / chamar API de cadastro

    api
      .post("users", requestObject)
      .then(response => {
        console.log("resp = ", response);

        // exibir mensagem de que cadastro foi realizado com sucesso

        // limpar form
        valuesFormik.resetForm();
      })
      .catch(error => {
        console.log("error", error);
      });

    console.log("chegou ao fim do cadastro");

    return true;
  };

  const resetErrors = field => {
    setErrors({ ...errors, [field]: { error: false, helperText: "" } });
  };

  const valuesFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: register
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <form className={classes.form} onSubmit={valuesFormik.handleSubmit}>
          <TextField
            {...errors.name}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            value={valuesFormik.values.name}
            label="Nome da loja"
            name="name"
            autoFocus
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />

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
            Registrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                variant="body2"
                onClick={() => history.push("/")}
                className={classes.hover}
              >
                Voltar a tela de login
              </Link>
            </Grid>
            <Grid item />
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
