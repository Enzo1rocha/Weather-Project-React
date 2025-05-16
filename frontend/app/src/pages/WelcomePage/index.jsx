import * as s from './style';
import Background from '../../components/Background';
import Button from '../../components/Button';
import WelcomeImage from '../../assets/authPageIMGS/Welcome.svg';

function WelcomePage() {
    return (
        <Background>
            <s.Container>
                <s.ContainerContent>
                    <s.Content>
                        <s.Title>Weather <br /> Forecast</s.Title>

                        <s.title_buttonContainer>
                            <s.SubTitle>Stay ahead of the weather with our intelligent and easy-to-use forecasting app. Whether you're planning your day, preparing for a trip, or just curious about what’s coming, we provide real-time updates, hourly forecasts, and detailed climate information tailored to your location.
                            </s.SubTitle>
                        <Button value={'Create Your Account'} />
                        </s.title_buttonContainer>
                    </s.Content>    
                </s.ContainerContent>
                <s.ContainerWithImage>
                    <s.ImageContent src={WelcomeImage}></s.ImageContent>
                </s.ContainerWithImage>
            </s.Container>
        </Background>   
    )
}

export default WelcomePage;