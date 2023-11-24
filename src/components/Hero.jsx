import React from 'react';
import Hero1 from '../assets/hero1.webp';
import Hero2 from '../assets/hero2.webp';
import Hero3 from '../assets/hero3.webp';
import Hero4 from '../assets/hero4.webp';
import {Link} from 'react-router-dom';

const carouselImages = [Hero1, Hero2, Hero3, Hero4];


const Hero = () => {
  return (
    <div className='align-element py-20 grid lg:grid-cols-2 gap-x-24'>
      <div>
        <h1 className='text-4xl font-bold max-w-2xl lg:text-6xl'>We changes the way people shop</h1>
        <p className='tracking-wide mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nesciunt atque perspiciatis hic delectus! Odio molestiae, vitae alias a magni aliquid eligendi et ratione id, provident at magnam, laborum quaerat!</p>
        <div className='mt-6'>
          <Link to='/products' className='btn btn-primary'>our products</Link>
        </div>
      </div>
      <div className="h-[28rem] w-80 carousel rounded">
        {
          carouselImages.map((image, index)=> {
            return (
              <div key={index} className='carousel-item w-full'>
               <img  src={image} className='h-full w-full'  />
              </div>
            )
          })
        }
        

      </div>
    </div>
  )
}

export default Hero;