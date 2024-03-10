import './Header.css';
import Nav from './Nav.js';
import Logo from '../images/Asset 16@4x.png';
import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <div className = 'headerColumn1'>
        <Link to="/">
          <img src = {Logo}  alt ="logo" width='100%'/>
        </Link>
        </div>
        <div className = 'headerColumn2'>
          <Nav/>
        </div>
      </header>
    );
  }

  export default Header;