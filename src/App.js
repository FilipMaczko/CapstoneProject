import './App.css';
import { Helmet } from 'react-helmet';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main'
function App() {
  return (
    <>
    <div className = 'container'>
    <Helmet>
      <title>Little Lemon</title>
      <meta name="description" content="Little Lemon restaurant page" />
      <meta property="og:title" content="Little Lemon" />
      <meta property="og:description" content="Little Lemon restaurant page" />
      <meta property="og:image" content="./images/Asset 20@4x.png" />
    </Helmet>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
