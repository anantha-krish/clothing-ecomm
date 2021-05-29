
import "./styles.scss";
import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";


interface Props {
    
}

interface State {
    email:string,
    password:string    
}

class SignIn extends Component<Props, State> {
    constructor(props:Props)
    {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit = (event:React.SyntheticEvent) =>{
        event.preventDefault();
        this.setState({email:"",password:""})
    }
    handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        const {value, name} = event.currentTarget;
        this.setState({
            ...this.state,
            [name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput
                    name="email"
                    type="email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    required
                    label="Email"/>
                   <FormInput
                   name="password"
                   type="password"
                   value={this.state.password}
                   onChange={this.handleChange}
                   required
                   label="Password"
                   />
                   <CustomButton type="submit">Sign in</CustomButton>
                   <CustomButton type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </form> 
            </div>
        )
    }
}

export default SignIn

