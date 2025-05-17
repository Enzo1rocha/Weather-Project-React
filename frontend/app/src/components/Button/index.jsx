import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import * as s from './style.js'

function Button({value, IsLink = false, href='', }) {

    function checkOptions() {
        if (IsLink) {
            window.location.href = href;
        } else {
            console.log('Button clicked');
        }
    }

    return (
        <s.Button onClick={checkOptions} >
            {value}
        </s.Button>
    )
} 

export default Button