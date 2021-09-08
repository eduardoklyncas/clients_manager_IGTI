import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { FiDelete, FiEdit3 } from "react-icons/fi";
import api from "../../services/api";
import { index } from "./styles";

const Costumers = () => {
  const [clientList, setClientList] = useState([]);

  const classes = index();
  const history = useHistory();

  const userId = "4";

  const getClientList = () => {
    api.get(`users/${userId}/clients`).then(response => {
      setClientList(response.data);
    });
  };

  const adicionar = () => {
    history.push("/formulario");
  };

  const deleteItem = id => {
    const resposta = window.confirm("Deseja remover o cliente ?");
    if (resposta) {
      api.delete(`users/${id}`).then(response => {
        getClientList();
      });
    }
  };

  const editItem = id => {
    console.log("item a ser editado == ", id);
  };

  useEffect(() => {
    getClientList();
  }, []);

  useEffect(() => {
    console.log("clientList === ", clientList);
  }, [clientList]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nome completo",
      width: 180
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 150
    },
    {
      field: "telefone",
      headerName: "Telefone",
      type: "number",
      width: 135
    },
    {
      field: "rua",
      headerName: "Rua",
      width: 140
    },
    {
      field: "numero",
      headerName: "Número",
      type: "number",
      width: 125
    },
    {
      field: "bairro",
      headerName: "Bairro",
      width: 120
    },
    {
      field: "complemento",
      headerName: "Complemento",
      width: 160
    },
    {
      field: "cidade",
      headerName: "Cidade",
      width: 120
    },
    {
      field: "estado",
      headerName: "Estado",
      width: 120
    },
    {
      field: "actions",
      headerName: "Ações",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <FiDelete
              size="20"
              index={params}
              style={{ marginRight: "10px" }}
              onClick={() => deleteItem(params.id)}
            />
            <FiEdit3
              size="20"
              index={params}
              onClick={() => editItem(params.id)}
            />
          </div>
        );
      }
    }
  ];

  return (
    <div>
      <div style={{ backgroundColor: "#BC544B", height: "100px" }}>
        <Grid container>
          <Grid item md={10}>
            <h1>Cadastro de clientes</h1>
          </Grid>
          <Grid item md={1}>
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
          rows={clientList.map(client => {
            return client;
          })}
          columns={columns}
          pageSize={5}
          // checkboxSelection
          disableSelectionOnClick
          style={{ fontSize: "0.8rem" }}
        />
      </div>
    </div>
  );
};

export default Costumers;
