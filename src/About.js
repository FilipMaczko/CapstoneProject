import MarioAndAdrianA from './images/Mario and Adrian A.jpg';
import MarioAndAdrianB from './images/Mario and Adrian b.jpg';
import './About.css'

function About() {
    return (
      <section className = "about">
      <div className = 'aboutColumn'>
        <h1 className='displayTitle'>Little Lemon</h1>
        <h2 className='subTitle'>Chicago</h2>
        <p className = 'paragraphText'>
          Little lemon is a famili owned, italian restarant created by two brothers Mario and Adrian. 
          They passion for cooking good fod and unique atmosphere is what make every meal in our restaurant into a special moment for you and your loved ones.
        </p>
      </div>

      <div className='aboutColumn'>
        <img src ={MarioAndAdrianA} alt='Mario and Adrian'/>
        <img src ={MarioAndAdrianB} alt='Mario and Adrian'/>
      </div>

      </section>
    );
  }

  export default About;