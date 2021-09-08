import { FiDelete, FiEdit3 } from "react-icons/fi";

export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "fullName",
    headerName: "Nome completo",
    width: 180
    // editable: true
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 150
    // editable: true
  },
  {
    field: "phone",
    headerName: "Telefone",
    type: "number",
    width: 135
    // editable: true
  },
  {
    field: "address",
    headerName: "Rua",
    width: 140
    // editable: true
  },
  {
    field: "number",
    headerName: "Número",
    type: "number",
    width: 125
    // editable: true
  },
  {
    field: "neighborhood",
    headerName: "Bairro",
    width: 120
    // editable: true
  },
  {
    field: "complement",
    headerName: "Complemento",
    width: 160
    // editable: true
  },
  {
    field: "city",
    headerName: "Cidade",
    width: 120
    // editable: true
  },
  {
    field: "state",
    headerName: "Estado",
    width: 120
    // editable: true
  },
  {
    field: "action",
    headerName: "Ações",
    width: 115
  }
  /* {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`
  } */
];

export const rows = [
  {
    id: 1,
    fullName: "Jon Snow Teste 1234567",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC",
    action: params => {
      return (
        <div style={{ cursor: "pointer" }}>
          <FiEdit3 />
          <FiDelete />
        </div>
      );
    }
  },
  {
    id: 2,
    fullName: "Cersei",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 3,
    fullName: "Jaime",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 4,
    fullName: "Arya",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 5,
    fullName: "Daenerys",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 6,
    fullName: "Melisandre",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 7,
    fullName: "Ferrara",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 8,
    fullName: "Rossini",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  },
  {
    id: 9,
    fullName: "Harvey",
    email: "email@email.com",
    phone: "4799999-9999",
    address: "rua teste",
    number: 555,
    neighborhood: "Centro",
    complement: "casa",
    city: "Joinville",
    state: "SC"
  }
];
