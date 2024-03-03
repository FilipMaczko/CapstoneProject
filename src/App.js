import './App.css';
import { Helmet } from 'react-helmet';
import Header from './Header.js';
import Footer from './Footer.js';
import MainPage from './MainPage.js'
function App() {
  return (
    <>
    <Helmet>
      <title>Little Lemon</title>
      <meta name="description" content="Little Lemon restaurant page" />
      <meta property="og:title" content="Little Lemon" />
      <meta property="og:description" content="Little Lemon restaurant page" />
      <meta property="og:image" content="./images/Asset 20@4x.png" />
    </Helmet>
    
    <Header/>
    <MainPage/>
    <Footer/>
    </>
  );
}

export default App;
