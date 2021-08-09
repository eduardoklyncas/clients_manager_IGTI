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

const Form = () => {
  const classes = index();

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const submitForm = async values => {
    console.log(values);
  };

  const valuesFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefone: "",
      rua: "",
      numero: "",
      bairro: "",
      complemento: "",
      cidade: "",
      estado: ""
    },
    onSubmit: submitForm
  });

  const resetErrors = field => {
    setErrors({ ...errors, [field]: { error: false, helperText: "" } });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginTop: "10px", marginBottom: "10px" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
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
            label="Nome completo"
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
            {...errors.telefone}
            variant="outlined"
            margin="normal"
            fullWidth
            id="telefone"
            value={valuesFormik.values.telefone}
            label="Telefone"
            name="telefone"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.rua}
            variant="outlined"
            margin="normal"
            fullWidth
            id="rua"
            value={valuesFormik.values.rua}
            label="Rua"
            name="rua"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.numero}
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero"
            value={valuesFormik.values.numero}
            label="Número"
            name="numero"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.bairro}
            variant="outlined"
            margin="normal"
            fullWidth
            id="bairro"
            value={valuesFormik.values.bairro}
            label="Bairro"
            name="bairro"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.complemento}
            variant="outlined"
            margin="normal"
            fullWidth
            id="complemento"
            value={valuesFormik.values.complemento}
            label="Complemento"
            name="complemento"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.cidade}
            variant="outlined"
            margin="normal"
            fullWidth
            id="cidade"
            value={valuesFormik.values.cidade}
            label="Cidade"
            name="cidade"
            onChange={e => {
              resetErrors(e.target.name);
              valuesFormik.handleChange(e);
            }}
          />
          <TextField
            {...errors.estado}
            variant="outlined"
            margin="normal"
            fullWidth
            id="estado"
            value={valuesFormik.values.estado}
            label="Estado"
            name="estado"
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
                onClick={() => history.push("/painel")}
                className={classes.hover}
              >
                Voltar
              </Link>
            </Grid>
            <Grid item />
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Form;
