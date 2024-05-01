import './Nav.css'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className = 'headerNav'>
          <ul className = 'cardTitle'>
            <li>
            <Link to="/CapstoneProject/">Home</Link>
            </li>
            <li>
              About
            </li>
            <li>
              Menu
            </li>
            <li>
            <Link to="/CapstoneProject/booking">Reservations</Link>
            </li>
            <li>
              Order Online
            </li>
          </ul>
        </nav>
    );
  }

  export default Nav;