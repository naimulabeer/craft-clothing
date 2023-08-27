import { useState } from "react";

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
        <label>Display Name</label>
        <input
          name="displayName"
          type="text"
          placeholder="Name"
          required
          onChange={handleChange}
          value={displayName}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
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
