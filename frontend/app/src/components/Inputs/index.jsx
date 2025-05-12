import * as s from './style'

function InputComponent({LabelText}) {
    return (
        <s.Container>
            <s.Label htmlFor="input">{LabelText}</s.Label>
            <s.Field type="text" id="input" name="input" />
        </s.Container>
    )
}

export default InputComponent