import * as s from './style'

function InputComponent({LabelText, type, updatePassword=false}) {
    return (
        <s.Container>
            <s.Label htmlFor="input">{LabelText}</s.Label>
            <s.Field type={type} id="input" name="input" />
        </s.Container>
    )
}

export default InputComponent