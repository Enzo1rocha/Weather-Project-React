import * as s from './style';
import { useNavigate } from 'react-router-dom';

function ForgoutAccount({Text, navigateTo, isLogin}) {

     const navigate = useNavigate( )
    
    return (
        <s.Container>
            <s.Link onClick={() => {navigate(navigateTo)}}>
                {Text}
            </s.Link>
            {isLogin && <s.Link onClick={() => navigate('/forgot')}>
                {'Forgot Password'}
            </s.Link>}
        </s.Container>
    )
}

export default ForgoutAccount