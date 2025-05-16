import * as s from './style';
import elementAbstract from '../../assets/authPageIMGS/elementAbstract.png';

function Background({ children }) {
    return (
        <s.Container>
            <s.TopRight src={elementAbstract}></s.TopRight>
            <s.BottomLeft src={elementAbstract}></s.BottomLeft>
            {children}
        </s.Container>
    )
}

export default Background;