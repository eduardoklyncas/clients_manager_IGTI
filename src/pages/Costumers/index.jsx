import React, { useState, useEffect } from "react";
import CostumersTable from './costumersTable';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { index } from './styles';



const Costumers = () => {
    const classes = index();

    return (
        <div>
            <div style={{backgroundColor: 'blue', height: '100px'}}>
                <Grid container>
                <Grid item xs>
                    <h1>Cadastro de clientes</h1>
                    </Grid>
                    <Grid item xs>
                    <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Adicionar
        </Button>
                    </Grid>
                </Grid>
            </div>
        <CostumersTable />
        </div>
    )

};

export default Costumers;