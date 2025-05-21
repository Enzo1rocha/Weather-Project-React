import * as s from './style';
import elementAbstract from '../../assets/authPageIMGS/elementAbstract.png';
import NavBar from '../NavBar';
import { Nav } from '../NavBar/style';

function Background({ children }) {
    return (
        <div>
            <s.Container>
            <s.TopRight src={elementAbstract}></s.TopRight>
            <s.BottomLeft src={elementAbstract}></s.BottomLeft>
            {children}
            </s.Container>
        </div>
    )
}

export default Background;