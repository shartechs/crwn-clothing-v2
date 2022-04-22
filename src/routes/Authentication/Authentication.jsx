import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx";
import SignInForm from "../../components/SignInForm/SignInForm.jsx";

import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
