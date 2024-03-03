import Logo from './images/Asset 20@4x.png';

function Footer() {
    return (
      <footer>
        <div class = 'footerColumn'>
          <img src = {Logo}  alt ="logo"/>
        </div>
        <nav class = 'footerColumn'>
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
        <div class = 'footerColumn'>
        <h1>Contact us</h1>
            <ul>
              <li>Adress</li>
              <li>Email</li>
              <li>Phone number</li>
            </ul>
        </div>
        <div class = 'footerColumn'>
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