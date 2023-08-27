import { useState } from "react";

import FormInput from "../form-input/FormInput";

import {
  createAuthUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUser(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else {
        console.log("Error creating user", err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Signup with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={password}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default SignupForm;
