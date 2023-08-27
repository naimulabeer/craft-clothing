import SignupForm from "../../components/SignUp/SignupForm";
import SignInForm from "../../components/SignIn/SignInForm";

import "./authentication.styles.scss";

function Authentication() {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
}

export default Authentication;
