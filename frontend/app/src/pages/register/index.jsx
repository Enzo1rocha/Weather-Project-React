import Welcome from "../../components/welcome";
import SignUp from '../../assets/authPageIMGS/SignUp.png'
import { useRef, useState } from "react";



function Register() {

    const [Title, setTitle] = useState("Create Account")

    const [LabelText, setLabelText] = useState("Sign Up")
    const [Text, setText] = useState("Sign In")

    return (
        <Welcome img={SignUp} FormTitle={Title} LabelText={LabelText} Text={Text} ShowNameInput={true} isLogin={false} navigateTo={'/login'} />
    )
}

export default Register