import {useNavigate} from "react-router-dom";

import {LogoIcon, LogoIconIcon} from "../../assets/icons.tsx";
import './style.css'



const Header = () => {

  const navigate = useNavigate()

  const goHome = () => navigate('/')

  return (
    <header>
      <div className={'content'}>
        <div className={'logo'} onClick={ goHome }>
          <LogoIconIcon />
          <LogoIcon />
        </div>
      </div>
    </header>
  )
}

export default Header