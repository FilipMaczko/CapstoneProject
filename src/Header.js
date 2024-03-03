import Nav from './Nav.js';
import {ReactComponent as Logo} from './images/Logo.svg';

function Header() {
    return (
      <header>
        <Logo/>
        <Nav/>
      </header>
    );
  }

  export default Header;