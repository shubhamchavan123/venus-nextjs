import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Contactform = () => {
  return (
    <section className='overflow-x-hidden bg-darkmode dark:bg-darklight'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0'>

          {/* LEFT SIDE */}
          <div
            className='row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'
          >

            <div className='flex gap-2 items-center justify-start'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-sm text-white'>
                Flutter Developer
              </span>
            </div>

            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-white py-12'>
              Let’s build your next Flutter app together.
            </h2>

            {/* Contact Info */}
            <div className='grid grid-cols-6 pb-12 border-b border-dark_border'>
              <div className='col-span-3'>
                <span className='text-white/50 text-lg'>Phone</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  +91 9359219134
                </p>
              </div>

              <div className='col-span-3'>
                <span className='text-white/50 text-lg'>Email</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  chavanshubham936@gmail.com
                </p>
              </div>

              <div className='col-span-6 pt-8'>
                <span className='text-white/50 text-lg'>Location</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  PUNE, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Trusted By */}
            <div className='pt-12'>
              <p className='text-white/50 pb-4 text-base'>Trusted by</p>
              <div className='flex items-center flex-wrap md:gap-14 gap-7'>
                <Image
                  src={getImgPath('/images/contact/google-pay.png')}
                  alt='Google-pay'
                  width={100}
                  height={20}
                  className='w_f max-w-28 w-full h-5'
                />
                <Image
                  src={getImgPath('/images/contact/play-juction.png')}
                  alt='play-juction'
                  width={100}
                  height={20}
                  className='w_f max-w-24 w-full h-6'
                />
                <Image
                  src={getImgPath('/images/contact/stripe.png')}
                  alt='stripe'
                  width={100}
                  height={20}
                  className='w_f max-w-14 w-full h-6'
                />
                <Image
                  src={getImgPath('/images/contact/wise.png')}
                  alt='wise'
                  width={100}
                  height={20}
                  className='w_f max-w-16 w-full h-4'
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className="
              relative
              before:content-['']
              before:absolute 
              before:bg-[url('/images/contact/form-line.png')] 
              before:bg-no-repeat 
              before:w-[13rem] 
              before:h-24 
              before:top-[5%] 
              before:bg-contain 
              before:left-[35%] 
              before:z-[1] 
              before:translate-x-full 
              lg:before:inline-block 
              before:hidden

              after:content-[''] 
              after:absolute 
              after:bg-[url('/images/contact/from-round-line.png')] 
              after:bg-no-repeat 
              after:w-[6.3125rem] 
              after:h-[6.3125rem] 
              after:bg-contain 
              after:top-1/2 
              after:-left-[25%] 
              after:z-[1] 
              after:translate-x-1/2 
              after:translate-y-1/2 
              md:after:inline-block 
              after:hidden

              md:row-start-1 row-start-2 
              md:col-start-8 col-start-1 
              row-end-2 col-end-13
            "
          >

            <div className='lg:mt-0 mt-8 bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10'>

              <h2 className='sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white'>
                Start Your Project
              </h2>

              <form className='flex w-full m-auto justify-between flex-wrap gap-4'>

                {/* FIRST + LAST NAME */}
                <div className='flex gap-4 w-full'>
                  <input
                    className='text-midnight_text w-full text-base bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border focus:border-primary rounded-lg focus-visible:outline-0'
                    type='text'
                    placeholder='First name'
                  />
                  <input
                    type='text'
                    className='text-midnight_text w-full text-base bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border focus:border-primary rounded-lg focus-visible:outline-0'
                    placeholder='Last name'
                  />
                </div>

                {/* EMAIL */}
                <div className='w-full'>
                  <input
                    type='email'
                    className='text-midnight_text w-full text-base bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border focus:border-primary rounded-lg focus-visible:outline-0'
                    placeholder='your@email.com'
                  />
                </div>

                {/* MESSAGE */}
                <div className='w-full'>
                  <textarea
                    className='text-midnight_text h-[9.375rem] w-full text-base bg-transparent dark:border-dark_border dark:text-white px-4 py-3 border border-border focus:border-primary rounded-lg focus-visible:outline-0'
                    placeholder='Tell me about your Flutter app idea...'
                  ></textarea>
                </div>

                {/* BUTTON */}
                <div className='w-full'>
                  <button
                    className='w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contactform
