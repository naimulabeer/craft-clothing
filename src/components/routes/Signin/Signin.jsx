import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

function Signin() {
  const logGoogleUser = async function () {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}

export default Signin;
