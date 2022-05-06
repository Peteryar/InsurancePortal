import icons from '../../imageUtil';
import './styles.css';
import { ReactComponent as LogOutIcon } from '../../assets/log-out.svg';

function Item({ text, icon }) {
    return (
        <div className={text==='Log Out'?'item-con1':"item-con"}>
            {text === 'Log Out' ? <LogOutIcon style={{marginRight:25}}/> : <img src={icons[icon]} />}
            <p>{text}</p>
        </div>
    )
}


export default Item;