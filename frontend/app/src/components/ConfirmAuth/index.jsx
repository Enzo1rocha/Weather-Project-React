import * as s from './style'
import RightArrow from '../../assets/authPageIMGS/RightArrow.svg'

function Sign_Container({LabelText}) {
    return (
        <s.Container>
            <s.LabelForButton htmlFor="input">{LabelText}</s.LabelForButton>
            <s.Button type="button" id="input" name="input">
                <s.SignImage src={RightArrow} />
            </s.Button>
        </s.Container>
    )
}

export default Sign_Container