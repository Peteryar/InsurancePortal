import {ReactComponent as LogoImage} from '../../assets/logo.svg'
import './styles.css'
function Logo(){
    return(
        <div className='logo-con'>
           <LogoImage />
           <p >Insurance Portal</p>
        </div>
    )
}

export default Logo;