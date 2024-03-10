import './Testimonials.css'
import Testimonial from './Testimonial.js'

function Testimonials() {
    return (
        <section className = 'highlightedSection'>
            <div className='testimonialsSectionTitle'>
                <h1 className='displayTitle'>Testimonials</h1>
            </div>
            <div className='testimonialColumn'>
                <Testimonial
                rating= '5'
                personaImg = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='Anna'
                review = 'The inventive twists on traditional dishes are a delight to the senses.'
                />
            </div>
            <div className='testimonialColumn'>
                <Testimonial
                rating= '5'
                personaImg = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='Anna'
                review = 'The inventive twists on traditional dishes are a delight to the senses.'
                />
            </div>
            <div className='testimonialColumn'>
                <Testimonial
                rating= '5'
                personaImg = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='Anna'
                review = 'The inventive twists on traditional dishes are a delight to the senses.'
                />
            </div>
            <div className='testimonialColumn'>
                <Testimonial
                rating= '5'
                personaImg = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='Anna'
                review = 'The inventive twists on traditional dishes are a delight to the senses.'
                />
            </div>
        </section>
    );
  }

  export default Testimonials;