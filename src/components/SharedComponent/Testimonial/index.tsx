import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div>
          <Image
            src={getImgPath('/images/testimonial/vector-smart.png')}
            alt='testimonial'
            width={150}
            height={0}
            quality={100}
            className='w_f w-94! h-52! m-auto'
          />
          <div className='pt-16 pb-28'>
            <p className='font-medium md:text-xl text-base text-midnight_text dark:text-white text-center max-w-3xl mx-auto'>
              Shubham delivered an exceptional Flutter application that exceeded our expectations. 
              His expertise in clean architecture, smooth UI animations, and API integration 
              helped us launch a scalable and high-performing mobile solution on time.
            </p>
          </div>
          <div className='text-center'>
            <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
              Project Manager
            </strong>
            <p className='text-base text-gray dark:text-white/50'>
              Client, Enterprise Mobile Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
