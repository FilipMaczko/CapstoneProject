import './Header.css';
import Nav from './Nav.js';
import Logo from './images/Asset 16@4x.png';

function Header() {
    return (
      <header>
        <div className = 'headerColumn1'>
          <img src = {Logo}  alt ="logo" width='100%' maxHeight= '3rem'/>
        </div>
        <div className = 'headerColumn2'>
          <Nav/>
        </div>
      </header>
    );
  }

  export default Header;