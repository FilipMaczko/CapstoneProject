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
                personaImg = 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='Mark'
                review = 'Little Lemon exceeded all expectations! The dishes were simply divine.'
                />
            </div>
            <div className='testimonialColumn'>
                <Testimonial
                rating= '5'
                personaImg = 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='Kalina'
                review = 'The fusion of traditional and modern flavors at Little Lemon was a pleasant surprise.'
                />
            </div>
            <div className='testimonialColumn'>
                <Testimonial
                rating= '5'
                personaImg = 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                personaName ='John'
                review = 'The food was absolutely delicious, and the ambiance was so inviting.'
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