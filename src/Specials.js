import Card from './Card';
import './Specials.css'

function Specials() {
    return (
        <section>
            <h1 className = 'sectionTitle'>Specials</h1>
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