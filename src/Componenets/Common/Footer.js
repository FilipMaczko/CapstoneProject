import Logo from '../../images/Asset 18@4x.png';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className='highlightedSection'>
        <div className = 'footerColumn'>
          <img className= 'footerLogo' src = {Logo}  alt ="logo"/>
        </div>
        <nav className = 'footerColumn'>
          <h1>Navigation</h1>
            <ul>
              <li><Link to="/CapstoneProject/">Home</Link></li>
              <li>About</li>
              <li>Menu</li>
              <li><Link to="/CapstoneProject/booking">Reservations</Link></li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
        </nav>
        <div className = 'footerColumn'>
        <h1>Contact us</h1>
            <ul>
              <li>Adress: 4535 N Lincoln Ave, Chicago, IL 60625, USA</li>
              <li>Email: contact@liitlelemon.com</li>
              <li>Phone number: 123 456 789</li>
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