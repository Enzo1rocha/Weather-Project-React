import Welcome from "../../components/welcome";
import SignIn from '../../assets/authPageIMGS/SignIn.png'
import { use, useRef, useState } from "react";
import { Form } from "react-router-dom";

function Login() {

    const [FormTitle, setFormTitle] = useState("Welcome Back")

    const [LabelText, setLabelText] = useState('Sign In')

    const [Text, setText] = useState('Sign Up')


    return (
        <Welcome img={SignIn} FormTitle={FormTitle} LabelText={LabelText} Text={Text} ShowNameInput={false} isLogin={true} navigateTo={'/register'} />
    )
}

export default Login
