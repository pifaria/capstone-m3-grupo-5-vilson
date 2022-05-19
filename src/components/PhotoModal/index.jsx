import React from "react";
import { Container } from "./styles";

export default function PhotoModal({ newUrl, setMaximizeEvent }) {
  
  return (
    <Container onClick={() => setMaximizeEvent(false)}>
      <img
        src={newUrl}
        alt="bigSchem"
      />
    </Container>
  );
}
