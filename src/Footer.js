import Logo from './images/Asset 18@4x.png';
import './Footer.css';

function Footer() {
    return (
      <footer className='highlightedSection'>
        <div className = 'footerColumn'>
          <img className= 'footerLogo' src = {Logo}  alt ="logo"/>
        </div>
        <nav className = 'footerColumn'>
          <h1>Navigation</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
        </nav>
        <div className = 'footerColumn'>
        <h1>Contact us</h1>
            <ul>
              <li>Adress</li>
              <li>Email</li>
              <li>Phone number</li>
            </ul>
        </div>
        <div className = 'footerColumn'>
          <h1>Social media</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
        </div>
      </footer>
    );
  }

export default Footer;