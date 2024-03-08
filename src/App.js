import './App.css';
import { Helmet } from 'react-helmet';
import Header from './Header.js';
import Footer from './Footer.js';
import MainPage from './MainPage.js'
import BookingPage from './BookingPage.js';
import { Routes, Route} from "react-router-dom";

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
    
    <Routes> 
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
    
    <Footer/>
    </div>
    </>
  );
}

export default App;
