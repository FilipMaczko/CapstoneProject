import './Testimonials.css'
import Testimonial from './Testimonial.js'

function Testimonials() {
    return (
        <section>
            <div className='sectionTitle'>
                <h1>Testimonials</h1>
            </div>
            <div className='testimonialColumn'>
                <Testimonial/>
            </div>
            <div className='testimonialColumn'>
                <Testimonial/>
            </div>
            <div className='testimonialColumn'>
                <Testimonial/>
            </div>
            <div className='testimonialColumn'>
                <Testimonial/>
            </div>
        </section>
    );
  }

  export default Testimonials;