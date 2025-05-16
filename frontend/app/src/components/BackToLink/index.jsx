import * as s from './style';

function BackToLink({ href, value }) {
    return (
        <s.BackToLink href={href}>
            {value}
        </s.BackToLink>
    )
}

export default BackToLink;