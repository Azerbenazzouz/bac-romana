import React from "react";
import Table from "../Components/Table/Table";
import Container from '@mui/material/Container';

function List() {
  return (
    <div>
      <Container>
        <br />
        <h1>Liste des donateurs :</h1>
        <br />
      </Container>
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default List;
