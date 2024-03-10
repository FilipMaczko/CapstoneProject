import MarioAndAdrianA from '../images/Mario and Adrian A.jpg';
import MarioAndAdrianB from '../images/Mario and Adrian b.jpg';
import './About.css'

function About() {
    return (
      <section className = "about">
      <div className = 'aboutColumn'>
        <h1 className='displayTitle'>Little Lemon</h1>
        <h2 className='subTitle'>Chicago</h2>
        <p className = 'paragraphText'>
        At Little Lemon, the menu is a testament to their culinary prowess, a celebration of time-honored recipes passed down through generations, infused with a creative twist that tantalizes the taste buds. From classic dishes like creamy hummus and crispy falafel to succulent kebabs and aromatic tagines, each bite is a symphony of flavors that dance on your palate.
<br/>
What sets Little Lemon apart is Adrian and Mario's commitment to using locally sourced, seasonal ingredients, ensuring that every dish bursts with freshness and vitality. Their deep-rooted connection to their heritage shines through in every creation, as they blend traditional flavors with innovative techniques to create culinary masterpieces that delight and inspire.
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