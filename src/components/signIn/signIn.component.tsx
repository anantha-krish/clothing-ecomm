import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";
import CustomButton from "../custom-button/customButton.component";
import FormInput from "../form-input/form-input.component";
import "./styles.scss";

interface State {
  email: string;
  password: string;
}

const SignIn = ({ emailSignInStart, googleSignInStart }: ReduxProps) => {
  const [userCredentials, setUserCredentials] = useState<State>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const { email, password } = userCredentials;
  return (
    <div className="sign-in">
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password })),
});
const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(SignIn);
