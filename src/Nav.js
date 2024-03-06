import './Nav.css'

function Nav() {
    return (
        <nav className = 'headerNav'>
          <ul className = 'cardTitle'>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Menu
            </li>
            <li>
              Reservations
            </li>
            <li>
              Order Online
            </li>
            <li>
              Login
            </li>
          </ul>
        </nav>
    );
  }

  export default Nav;