import React from "react";
import { Container } from "./styles";

export default function Modal({ type, setModal }) {
  return type === "register" ? (
    <Container>
      <div>
        <header>Sucesso!</header>
        <span onClick={() => setModal(false)}>X</span>
      </div>
      <p>Seja bem vindo!!</p>
    </Container>
  ) : (
    <Container>
      <div>
        <header>Falha!</header>
        <span onClick={() => setModal(false)}>X</span>
      </div>
      <p>Email já cadastrado!</p>
    </Container>
  );
}
