import Card from './Card';
import './Specials.css'
import GreekSalad from '../../images/greek salad.jpg';
import LemonDessert from '../../images/lemon dessert.jpg'
import Bruchetta from '../../images/bruchetta.jpg'

function Specials() {
    return (
        <section>
            <div className = 'specialsTitle'>
            <h1 className = 'displayTitle'>Specials</h1>
            </div>
            <button className='orderButton'>Online Menu</button>
            <div className='cardColumn'>
                <Card
                foto={GreekSalad}
                dishName='Greek salad'
                price='12.99'
                description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary.'
                />
            </div>
            <div className='cardColumn'>
                <Card
                foto={Bruchetta}
                dishName='Bruchetta'
                price='5.99'
                description='Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
                />
            </div>
            <div className='cardColumn'>
                <Card
                foto={LemonDessert}
                dishName='Lemon Dessert'
                price='5.00'
                description='This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
                />
            </div>
        </section>
    );
  }

  export default Specials;