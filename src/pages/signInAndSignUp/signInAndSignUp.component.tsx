import React from 'react'
import SignIn from '../../components/signIn/signIn.component'
import SignUp from '../../components/signUp/sign-up.component'
import "./styles.scss"
interface Props {
    
}

const SignInAndSignUp = (props: Props) => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUp
