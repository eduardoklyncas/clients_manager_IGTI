import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import api from "../../services/api";
import { index } from "./styles";

import { rows, columns } from "./mockData";

const Costumers = () => {
  const classes = index();
  const history = useHistory();

  const userId = "4";

  const getClientList = () => {
    api.get(`users/${userId}/clients`).then(response => {
      // setOrders(response.data);
      console.log("response dos clients == ", response.data);
    });
  };

  const adicionar = () => {
    history.push("/formulario");
  };

  useEffect(() => {
    getClientList();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "#BC544B", height: "100px" }}>
        <Grid container>
          <Grid item md="10">
            <h1>Cadastro de clientes</h1>
          </Grid>
          <Grid item md="1">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={adicionar}
            >
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      {/*  
      <table>
        <thead>
          <tr>
            <th>TESTE</th>
            <th>TESTE 2</th>
            <th>TESTE 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>000</td>
            <td>111</td>
            <td>222</td>
          </tr>
          <td>000</td>

          <td>111</td>
          <td>222</td>
          <tr />
        </tbody>
      </table>
      */}
    </div>
  );
};

export default Costumers;
