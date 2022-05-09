import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";
import { AuthenticationStyled } from "./Authentication.styled.jsx";

const Authentication = () => {
  return (
    <AuthenticationStyled>
      <SignInForm />
      <SignUpForm />
    </AuthenticationStyled>
  );
};

export default Authentication;
