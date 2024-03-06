import Card from './Card';
import './Specials.css'

function Specials() {
    return (
        <section>
            <div className = 'specialsTitle'>
            <h1 className = 'displayTitle'>Specials</h1>
            </div>
            <button className='orderButton'>Online Menu</button>
            <div className='cardColumn'>
                <Card/>
            </div>
            <div className='cardColumn'>
                <Card/>
            </div>
            <div className='cardColumn'>
                <Card/>
            </div>
        </section>
    );
  }

  export default Specials;