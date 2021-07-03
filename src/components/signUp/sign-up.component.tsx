import React, { ChangeEvent, Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/customButton.component";
import FormInput from "../form-input/form-input.component";
import "./styles.scss";
interface Props extends ReduxProps {}
interface State {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class SignUp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    const { signUpStart } = this.props;
    signUpStart(email, password, displayName);
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Signup with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToState = (dispatch: AppDispatch) => ({
  signUpStart: (email: string, password: string, displayName: string) =>
    dispatch(signUpStart({ email, password, displayName })),
});
const connector = connect(null, mapDispatchToState);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(SignUp);
