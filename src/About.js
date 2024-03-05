import MarioAndAdrianA from './images/Mario and Adrian A.jpg';
import MarioAndAdrianB from './images/Mario and Adrian b.jpg';

function About() {
    return (
      <section className = "about">
      <h1>Greek salad</h1>
      <h2>Order a delivery</h2>
      <p>The famous greek salad of the crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
      <img src ={MarioAndAdrianA} alt='Mario and Adrian'/>
      <img src ={MarioAndAdrianB} alt='Mario and Adrian'/>
      </section>
    );
  }
  
  export default About;