import { ButtonContainer } from "./styles";

const Button = ({ label, onClick }) => (
  <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
);
export default Button;
