import { Container } from "./styles";

const Button = ({ beigeSchema, greySchema, children, type, ...rest }) => {
  return (
    <Container beigeSchema={beigeSchema} greySchema={greySchema} type={type} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
