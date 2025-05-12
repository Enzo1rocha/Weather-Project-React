import * as s from './style'
import SignUp from '../../assets/authPageIMGS/SignUp.png'

import InputComponent from '../Inputs'

import Sign_Container from '../ConfirmAuth'

import ForgoutAccount from '../forgoutAccount'

import { useNavigate } from "react-router-dom";


function Welcome({img, FormTitle, LabelText, Text, ShowNameInput, isLogin, navigateTo}) {

    return (
        <s.Container>

            <s.ContainerWithImage>
                <s.PictureContainer>
                    <s.SignUpImage src={img} $isLogin={isLogin}>
                    </s.SignUpImage>
                </s.PictureContainer>
            </s.ContainerWithImage>

            <s.ContainerWithForm>
                <s.FormContainer>

                    <s.FormTitle>{FormTitle}</s.FormTitle>


                    <s.ContainerWithInputs>
                        {ShowNameInput && <InputComponent LabelText="Name" />}
                        <InputComponent LabelText="Email" />
                        <InputComponent LabelText="Password" />
                    </s.ContainerWithInputs>
                    
                    <Sign_Container LabelText={LabelText} />

                    <ForgoutAccount Text={Text} navigateTo={navigateTo} isLogin={isLogin}/>
   
                </s.FormContainer>
            </s.ContainerWithForm>
        </s.Container>
    )
}

export default Welcome