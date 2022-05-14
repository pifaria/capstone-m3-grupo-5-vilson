import React, { useState } from "react";
import Button from "../Button";
import { Container } from "./styles";

export default function Budget() {
  const [budget, setBudget] = useState(false);

  return (
    <Container>
      <Button onClick={() => setBudget(!budget)}>Solicitar orçamento </Button>
      {budget ? <p>Solicitado</p> : <span>Solicitado</span>}
    </Container>
  );
}
