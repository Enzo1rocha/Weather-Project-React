import * as s from './style'
import forgotPassword from '../../assets/authPageIMGS/forgotPassword.svg'
import ForgotInput from '../../components/InputsForgotPassword'

import Button from '../../components/Button'

function ForgotPassword() {
    return ( 
        <s.Container>
            <s.ContainerWithImage>
                <s.image src={forgotPassword}></s.image>
            </s.ContainerWithImage>
            <s.FormContainer>
                <s.Title>Forgot <br></br> Your Password?</s.Title>

                <s.containerInput_Button>
                    <ForgotInput></ForgotInput>
                    <Button value={"Reset Password"}></Button>
                    <s.BackTo>Back to Signin</s.BackTo> 
                </s.containerInput_Button>

            </s.FormContainer>
        </s.Container>
    )
}

export default ForgotPassword