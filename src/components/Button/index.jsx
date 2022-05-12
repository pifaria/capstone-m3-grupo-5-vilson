import { Container } from "./styles";

const Button = ({ beigeSchema, greySchema, children, type }) => {
  return (
    <Container beigeSchema={beigeSchema} greySchema={greySchema} type={type}>
      {children}
    </Container>
  );
};

export default Button;
