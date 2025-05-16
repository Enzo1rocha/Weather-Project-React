import * as s from './style'
import forgotPassword from '../../assets/authPageIMGS/forgotPassword.svg'
import ForgotInput from '../../components/InputsForgotPassword'

import Button from '../../components/Button'
import Background from '../../components/Background'
import BackToLink from '../../components/BackToLink'

import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {

    const navigate = useNavigate( )

    return ( 
        <Background>
            <s.Container>
                <s.ContainerWithImage>
                    <s.image src={forgotPassword}></s.image>
                </s.ContainerWithImage>
                <s.FormContainer>
                    <s.Title>Forgot <br></br> Your Password?</s.Title>

                    <s.containerInput_Button>
                        <ForgotInput></ForgotInput>
                        <Button value={"Reset Password"}></Button>
                        <BackToLink value={'Back to Signin'} href={'/login'}></BackToLink>
                    </s.containerInput_Button>

                </s.FormContainer>
            </s.Container>
        </Background>
    )
}

export default ForgotPassword