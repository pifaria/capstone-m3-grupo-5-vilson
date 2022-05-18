import React from "react";
import { Container } from "./styles";

export default function PhotoModal({ newUrl, setMaximizeEvent }) {
  
  return (
    <Container>
      <img
        src={newUrl}
        alt="bigSchem"
        onClick={() => setMaximizeEvent(false)}
      />
    </Container>
  );
}
